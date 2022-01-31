import { Selector, t } from 'testcafe';

class DragDropPage {
    public El = new class {
        private Box: Selector = Selector('div.column');
        LeftBox: Selector = this.Box.nth(0);
        RightBox: Selector = this.Box.nth(1);
        BoxA: Selector = this.Box.withText('A');
        BoxB: Selector = this.Box.withText('B');
    }
}

export default new DragDropPage();