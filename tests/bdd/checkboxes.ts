import { Selector, t } from 'testcafe';
import { Given, When, Then } from '@cucumber/cucumber';

Given('I open TestCafe demo page', async t => {
   await t.navigateTo('https://devexpress.github.io/testcafe/example/');
});

When('test1', async t => {
   console.log('1');
 });
   
 Then('test2', async t => {
   console.log('2');
 });