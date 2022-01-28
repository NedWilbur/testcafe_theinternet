import { Selector, t } from 'testcafe';

class FileDownloadPage {
    public El = new class {
        DownloadLink: Selector = Selector('a[href*="download"]');
    }
}

export default new FileDownloadPage();