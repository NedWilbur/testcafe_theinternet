import { Selector } from 'testcafe';
import Page from '../pages/_pages'

fixture `Checkboxes`
    .page('http://the-internet.herokuapp.com/dropdown');

test('Dropbox Select', async t => {
    const availableOptions: string[] = ['Option 1', 'Option 2'];

    for await (const option of availableOptions) {
        await t
            .click(Page.Dropdown.El.Dropdown)
            .click(Page.Dropdown.El.DropdownOptions.withText(option))
            .expect(Page.Dropdown.El.DropdownOptions.withText(option).selected).ok();
    }
});