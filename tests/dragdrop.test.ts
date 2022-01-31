import { Selector } from 'testcafe';
import Page from '../pages/_pages'

fixture `Drag and Drop`
    .page('http://the-internet.herokuapp.com/drag_and_drop');

test('Drag A to B and back', async t => {
    await t
        .dragToElement(Page.DragDrop.El.BoxA, Page.DragDrop.El.BoxB)
        .expect(Page.DragDrop.El.LeftBox.innerText).eql('B')
        .expect(Page.DragDrop.El.RightBox.innerText).eql('A')
        .dragToElement(Page.DragDrop.El.BoxA, Page.DragDrop.El.BoxB)
        .expect(Page.DragDrop.El.LeftBox.innerText).eql('A')
        .expect(Page.DragDrop.El.RightBox.innerText).eql('B');
});

test('Drag B to A and back', async t => {
    await t
        .dragToElement(Page.DragDrop.El.BoxB, Page.DragDrop.El.BoxA)
        .expect(Page.DragDrop.El.LeftBox.innerText).eql('B')
        .expect(Page.DragDrop.El.RightBox.innerText).eql('A')
        .dragToElement(Page.DragDrop.El.BoxB, Page.DragDrop.El.BoxA)
        .expect(Page.DragDrop.El.LeftBox.innerText).eql('A')
        .expect(Page.DragDrop.El.RightBox.innerText).eql('B');
});