import { Selector, RequestLogger } from 'testcafe';
import Page from '../pages/_pages'

// SEE: https://testcafe.io/documentation/402684/reference/test-api/testcontroller/setnativedialoghandler

fixture `File Download`
    .page('http://the-internet.herokuapp.com/javascript_alerts');

test('JS Alerts', async t => {
    await t
        // Standard Alert
        .setNativeDialogHandler(() => true) // true = accept
        .click(Page.Alert.El.AlertButton)
        .expect(Page.Alert.El.Result.innerText).eql('You successfully clicked an alert')

        // Confirm Alert (OK or Cancel)
        .setNativeDialogHandler(() => true) // true = Ok
        .click(Page.Alert.El.ConfirmButton)
        .expect(Page.Alert.El.Result.innerText).eql('You clicked: Ok')
        .setNativeDialogHandler(() => false) // false = Cancel
        .click(Page.Alert.El.ConfirmButton)
        .expect(Page.Alert.El.Result.innerText).eql('You clicked: Cancel')
        
        // Prompt (alert w/ input)
        .setNativeDialogHandler(() => "Hello World")
        .click(Page.Alert.El.PromptButton)
        .expect(Page.Alert.El.Result.innerText).eql('You entered: Hello World');

        /* Dynamic Handler Example
        .setNativeDialogHandler((type, text, url) => {
            switch (type) {
                case 'confirm':
                    switch (text) {
                        case 'Do you want to subscribe?':
                            return false;
                        case 'Do you want to delete your account?':
                            return true;
                        default:
                            throw 'Unexpected confirm dialog!';
                    }
                case 'prompt':
                    return 'Hi there';
                case 'alert':
                    throw 'An alert was invoked!';
            }
        }) */
});