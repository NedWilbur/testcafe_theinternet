import { Selector, t } from 'testcafe';

class DropdownPage {
    public El = new class {
        Dropdown: Selector = Selector("#dropdown");
        DropdownOptions: Selector = this.Dropdown.find('option');
    }
}

export default new DropdownPage();