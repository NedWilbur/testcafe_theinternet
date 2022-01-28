import alertsPage from "./alerts.page";
import checkboxesPage from "./checkboxes.page";
import dropdownPage from "./dropdown.page";
import fileDownloadPage from "./filedownload.page";
import fileuploadPage from "./fileupload.page";

// Store all POMs, easier import management (only need `import Page from '../pages/pages'`)
class Pages {
    CheckBoxes = checkboxesPage;
    Dropdown = dropdownPage;
    Download = fileDownloadPage;
    Upload = fileuploadPage;
    Alert = alertsPage;
}

export default new Pages();