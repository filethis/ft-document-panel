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
/* ft-document-list element demo */
/* Imports */
/**

An element that renders a list of FileThis documents

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-document-list.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer
({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
            }
        </style>

        <ft-element-demo name="ft-document-list" style="width:100%; height: 100%; ">

            <ft-document-list id="list" slot="instance" style="width:100%; height: 100%; ">
            </ft-document-list>

        </ft-element-demo>
`,

  is: 'demo-fixture',

  properties:
  {
  },

  ready: function()
  {
      this._loadFakeDocuments();
  },

  _loadFakeDocuments: function()
  {
      var path = "fake-documents.json";

      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.overrideMimeType("application/json");
      xmlHttpRequest.open('GET', path, true);
      xmlHttpRequest.onreadystatechange = function()
      {
          if (xmlHttpRequest.readyState === 4 &&
              xmlHttpRequest.status === 200)
          {
              this.$.list.documents = JSON.parse(xmlHttpRequest.responseText);
          }
      }.bind(this);
      xmlHttpRequest.send();
  }
});
