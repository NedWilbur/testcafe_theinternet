import { Selector, t } from 'testcafe';

class AlertsPage {
    public El = new class {
        private Buttons: Selector = Selector('button');
        AlertButton: Selector = this.Buttons.withText('Alert');
        ConfirmButton: Selector = this.Buttons.withText('Confirm');
        PromptButton: Selector = this.Buttons.withText('Prompt');
        Result: Selector = Selector('#result');
    }
}

export default new AlertsPage();