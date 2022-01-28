import { Selector, RequestLogger } from 'testcafe';
import Page from '../pages/_pages'

// SEE: https://github.com/DevExpress/testcafe-examples/blob/master/examples/check-downloaded-file-name-and-content/index.js

const logger = RequestLogger({ url: 'http://the-internet.herokuapp.com/download/Comics.jpg', method: 'GET'}, {
    logResponseHeaders:    true,
    logResponseBody:       true,
    stringifyResponseBody: true
});

fixture `File Download`
    .page('http://the-internet.herokuapp.com/download')
    .requestHooks(logger);

test('Download file', async t => {
    const fileName = 'Comics.jpg';
    const fileLink: Selector = Page.Download.El.DownloadLink.withExactText(fileName);

    await t
        .click(fileLink)
        .expect(logger.contains(r => {
            // Validate HTTP response
            if (r.response.statusCode !== 200) return false;
            const requestInfo = logger.requests[0];
            if (!requestInfo) return false;
        
            // Validate filename
            const downloadedFileName = requestInfo.response.headers['content-disposition'];
            if (!downloadedFileName) return false;
            if (!downloadedFileName.includes(fileName)) return false;
            
            // Validate file contents
            // const downloadedFileContent = logger.requests[0].response.body;
            // if (downloadedFileContent !== 'Hello World') return false; 

            return true;
        })).ok();
});