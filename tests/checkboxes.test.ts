import { Selector } from 'testcafe';
import Page from '../pages/_pages'

fixture `Checkboxes`
    .page('http://the-internet.herokuapp.com/checkboxes');

test('Toggle checkboxes', async t => {
    await t
        .expect(Page.CheckBoxes.El.Checkbox1.checked).notOk()
        .expect(Page.CheckBoxes.El.Checkbox2.checked).ok()
        .click(Page.CheckBoxes.El.Checkbox1)
        .click(Page.CheckBoxes.El.Checkbox2)
        .expect(Page.CheckBoxes.El.Checkbox1.checked).ok()
        .expect(Page.CheckBoxes.El.Checkbox2.checked).notOk();
});