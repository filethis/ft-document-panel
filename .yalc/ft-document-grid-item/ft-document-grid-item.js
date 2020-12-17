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
`<ft-document-grid-item>`

This element displays a single FileThis document resource, suitable for use in grid of other documents.

@demo
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

import '@polymer/iron-label/iron-label.js';
import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
                @apply --ft-document-grid-item;
            }
            #interior {
                padding-left: 15px;
                padding-top: 15px;
                padding-right: 15px;
                @apply --ft-document-grid-item-interior;
            }
            #thumb {
                box-shadow: 3px 3px 3px #888888;
                border: 1px solid #DDD;
                @apply --ft-document-grid-item-thumbnail;
            }
            #name {
                width: 150px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 12px; color: #333333;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                @apply --ft-document-grid-item-name;
            }
        </style>

        <div id="interior" class="layout vertical center">

            <!-- Thumbnail -->
            <div id="thumb">
                <img src="[[document.thumbnailUrl]]" width="150" height="200" alt="Thumbnail">
            </div>

            <div style="height:16px;"></div>

            <!-- Name -->
            <iron-label id="name">
                [[document.name]]
            </iron-label>

        </div>
`,

  is: 'ft-document-grid-item',

  properties: {

      /** The document resource to be displayed. */
      document: {
          type: Object,
          notify: true,
          value:
              {
                  accountId: "1",
                  connectionId: "1",
                  actionDate: "2016-03-15T01:05:34+00:00",
                  addedDate: "2016-03-18T01:05:14+00:00",
                  createdDate: "2016-03-15T01:05:14+00:00",
                  deliveredDate: "2016-03-15T01:05:14+00:00",
                  relevantDate: "2016-03-15T01:05:14+00:00",
                  deliveryState: "done",
                  id: "1",
                  name: "Untitled",
                  pageCount: "1",
                  size: "1000",
                  thumbnailUrl: "https://filethis.com/static/logos/72/Logo_FileThisHosted.png",
              }
      },

      /** Whether the document item should appear selected, or not. */
      selected: {
          type: Boolean,
          notify: true,
          value: false,
          observer: "_onSelectedChanged"
      }
  },

  //            _ignoreClick: function(event, detail)
  //            {
  //                event.stopPropagation(); // So that we don't toggle the item selection
  //            }
  _onSelectedChanged: function(to, from)
  {
      var interior = this.$.interior;
      if (this.selected)
          interior.style.backgroundColor = "#F6F6F6";
      else
          interior.style.backgroundColor = "#FFFFFF";
  }
});
