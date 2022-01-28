import { Selector, RequestLogger } from 'testcafe';
import Page from '../pages/_pages'

// SEE: https://testcafe.io/documentation/402808/recipes/basics/test-file-upload

fixture `File Download`
    .page('http://the-internet.herokuapp.com/upload');

test('Upload file', async t => {
    const file = 'sample1.txt';

    await t
        .setFilesToUpload(Page.Upload.El.ChooseFileButton, `../data/${file}`) // Multiple files: `[ '../data/sample1.txt', '../data/sample2.txt' ]`
        .click(Page.Upload.El.UploadFileButton)
        .expect(Page.Upload.El.UploadedFiles.innerText).contains(file);
});