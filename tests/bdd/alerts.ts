import { Selector, t } from 'testcafe';
import { Given, When, Then } from '@cucumber/cucumber';
import Page from '../../pages/_pages';

Given('I open JS Alerts', async t => {
   await t.navigateTo('http://the-internet.herokuapp.com/javascript_alerts');
});

When(/^I click on button with text "(.+)"$/, async (t, [buttonText]) => {
    await t
        .setNativeDialogHandler(() => true)
        .click(Page.Alert.El.Buttons.withText(buttonText));
});

Then(/^result text is "(.+)"$/, async (t, [expectedText]) => {
    await t.expect(Page.Alert.El.Result.innerText).eql(expectedText);
});