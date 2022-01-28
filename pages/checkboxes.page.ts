import { Selector, t } from 'testcafe';

class CheckboxesPage {
    public El = new class {
        Checkboxes: Selector = Selector("*[type='checkbox']");
        Checkbox1: Selector = this.Checkboxes.nth(0);
        Checkbox2: Selector = this.Checkboxes.nth(1);
    }
}

export default new CheckboxesPage();