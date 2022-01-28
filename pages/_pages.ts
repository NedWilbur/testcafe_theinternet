import checkboxesPage from "./checkboxes.page";
import dropdownPage from "./dropdown.page";
import fileDownloadPage from "./filedownload.page";

// Store all POMs, easier import management (only need `import Page from '../pages/pages'`)
class Pages {
    CheckBoxes = checkboxesPage;
    Dropdown = dropdownPage;
    Download = fileDownloadPage;
}

export default new Pages();