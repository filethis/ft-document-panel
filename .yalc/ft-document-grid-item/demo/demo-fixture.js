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
/* ft-document-list-item element demo */
/* Imports */
/**

An element that renders information about a FileThis document in a parent grid

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-document-grid-item.js';
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

        <ft-element-demo name="ft-document-grid-item" style="width:100%; height: 100%; ">

            <div slot="instance" class="layout vertical center">

                <!-- Normal -->
                <ft-document-grid-item id="normal"></ft-document-grid-item>

                <div style="height:25px;"></div>

                <!-- Selected -->
                <ft-document-grid-item id="selected"></ft-document-grid-item>

            </div>

        </ft-element-demo>
`,

  is: 'demo-fixture',

  properties:
  {
  },

  ready: function()
  {
      this._loadFakeDocument();
  },

  _loadFakeDocument: function()
  {
      var path = "fake-document.json";

      var xmlHttpRequest = new XMLHttpRequest();
      xmlHttpRequest.overrideMimeType("application/json");
      xmlHttpRequest.open('GET', path, true);
      xmlHttpRequest.onreadystatechange = function()
      {
          if (xmlHttpRequest.readyState === 4 &&
              xmlHttpRequest.status === 200)
          {
              var document = JSON.parse(xmlHttpRequest.responseText);

              // Normal
              var documentNormal = Object.assign({}, document);
              this.$.normal.document = documentNormal;

              // Selected
              var documentSelected = Object.assign({}, document);
              this.$.selected.document = documentSelected;
              this.$.selected.selected = true;
          }
      }.bind(this);
      xmlHttpRequest.send();
  }
});
