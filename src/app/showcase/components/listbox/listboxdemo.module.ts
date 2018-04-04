import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {ListboxDemo} from './listboxdemo';
import {ListboxDemoRoutingModule} from './listboxdemo-routing.module';
import {ListboxModule} from '../../../components/listbox/listbox';
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';
import {ContextMenuModule} from '../../../components/contextmenu/contextmenu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListboxDemoRoutingModule,
    ListboxModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    ContextMenuModule
  ],
  declarations: [
    ListboxDemo
  ]
})
export class ListboxDemoModule {}
