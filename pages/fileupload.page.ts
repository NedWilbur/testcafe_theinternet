import { Selector, t } from 'testcafe';

class FileUploadPage {
    public El = new class {
        ChooseFileButton: Selector = Selector('#file-upload');
        UploadFileButton: Selector = Selector('#file-submit');
        UploadedFiles: Selector = Selector('#uploaded-files');
    }
}

export default new FileUploadPage();