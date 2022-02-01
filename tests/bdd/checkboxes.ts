import { Selector, t } from 'testcafe';
import { Given, When, Then } from '@cucumber/cucumber';
import Page from '../../pages/_pages';

Given('I open checkboxes', async t => {
   await t.navigateTo('http://the-internet.herokuapp.com/checkboxes');
});

When('I click some checkboxes', async (t, [], table) => {
  for (const { CheckboxIndex } of table.hashes()) {
    if (!CheckboxIndex) return;
    await t.click(Page.CheckBoxes.El.Checkboxes.nth(+CheckboxIndex));
  }
});

Then(/^the amount of selected checkboxes is "(.+)"$/, async (t, [amount]) => {
  const selectedCheckboxes = Page.CheckBoxes.El.Checkboxes.filter(checkbox =>
    Boolean(checkbox && (checkbox as HTMLInputElement).checked)
  );

  const checkedCount = await selectedCheckboxes.count;

  await t.expect(checkedCount).eql(Number(amount));
});