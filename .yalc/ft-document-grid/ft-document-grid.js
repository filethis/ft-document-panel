/*
Copyright 2018 FileThis, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
`<ft-document-grid>`

This element displays a grid layout of FileThis document resources.

@demo
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import 'ft-document-grid-item/ft-document-grid-item.js';

Polymer({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
                @apply --layout-vertical;
                @apply --ft-document-grid;
            }
            #documentGrid {
                background-color: white;
                @apply --ft-connection-grid-grid;
            }
        </style>

        <iron-list id="documentGrid" grid="" class="flex" selection-enabled="" items="[[documents]]" selected-item="{{selectedDocument}}" as="item">
            <!-- Document item template -->
            <template>
                <ft-document-grid-item document="[[item]]" selected\$="[[selected]]">
                </ft-document-grid-item>
            </template>
        </iron-list>
`,

  is: 'ft-document-grid',

  properties: {

      /** The list of document resources to be be displayed. */
      documents:
      {
          type: Array,
          notify: true,
          value: []
      },

      /** The currently-selected document, if any. */
      selectedDocument:
      {
          type: Object,
          notify: true,
          value: null
      }
  }
});
