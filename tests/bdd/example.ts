import { Given, When, Then } from '@cucumber/cucumber';
import { Selector as NativeSelector } from 'testcafe';

// SEE: https://github.com/Arthy000/gherkin-testcafe/tree/master/examples

const Selector = (input, t) => {
  return NativeSelector(input).with({ boundTestRun: t });
};

Given('I open TestCafe demo page', async t => {
  await t.navigateTo('https://devexpress.github.io/testcafe/example/');
});

When('I click some checkboxes', async (t, [], table) => {
  for (const { checkboxId } of table.hashes()) {
    await t.click('#' + checkboxId);
  }
});
  
Then(/^The amount of selected checkboxes is "(.+)"$/, async (t, [amount]) => {
  console.log(amount);
});