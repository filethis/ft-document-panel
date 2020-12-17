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
`<ft-document-list-item>`

This element displays a single FileThis document resource.

@demo
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-label/iron-label.js';
import '@polymer/paper-button/paper-button.js';
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
                @apply --ft-document-list-item;
            }
            #interior {
                width: 600px;
                height: 130px;
                padding-left: 20px;
                padding-right: 25px;
                @apply --ft-document-list-item-interior;
            }
            #middle {
                @apply --ft-document-list-item-middle;
            }
            #name {
                width: 100%;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 18px;
                @apply --ft-document-list-item-name;
            }
            #relevantDate {
                width: 100%;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                color: #777777;
                @apply --ft-document-list-item-relevant-date;
            }
            #addedDate {
                width: 100%;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                color: #777777;
                @apply --ft-document-list-item-added-date;
            }
            #right {
                @apply --ft-document-list-item-right;
            }
            #pages {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                color: #777777;
                @apply --ft-document-list-item-pages;
            }
            #size {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                color: #777777;
                @apply --ft-document-list-item-size;
            }
        </style>

        <div id="interior" class="layout horizontal center">

            <!-- Thumbnail -->
            <div style="box-shadow: 3px 3px 3px #888888;border:1px solid #DDD;">
                <img src="[[document.thumbnailUrl]]" width="80" height="100" alt="Thumbnail">
            </div>

            <div style="width:20px;"></div>

            <!-- Middle -->
            <div id="middle" class="layout vertical">

                <!-- Name -->
                <iron-label id="name">
                    [[document.name]]
                </iron-label>

                <div style="height:6px;"></div>

                <!-- Relevant Date -->
                <iron-label id="relevantDate">
                    Relevant Date: [[_dateToString(document.relevantDate)]]
                </iron-label>

                <div style="height:4px;"></div>

                <!-- Added Date -->
                <iron-label id="addedDate">
                    Date Added: [[_dateToString(document.addedDate)]]
                </iron-label>

            </div>

            <!-- Spacer -->
            <div class="flex"></div>
            <div style="width:25px;"></div>

            <!-- Right -->
            <div id="right" class="layout vertical end">

                <!-- Pages -->
                <iron-label id="pages">
                    [[document.pageCount]] pages
                </iron-label>

                <div style="height:5px;"></div>

                <!-- Size -->
                <iron-label id="size">
                    [[_sizeToString(document.size)]]
                </iron-label>

            </div>
        </div>
`,

  is: 'ft-document-list-item',

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

  _MONTH_NAMES: ['January','February','March','April','May','June','July','August','September','October','November','December'],

  _onSelectedChanged: function(to, from)
  {
      var interior = this.$.interior;
      if (this.selected)
          this.style.backgroundColor = "#F6F6F6";
      else
          this.style.backgroundColor = "#FFFFFF";
  },

  _dateToString: function(dateString)
  {
      var date = new Date(dateString);
      var day = date.getDate();
      var month = date.getMonth();
      var monthName = this._MONTH_NAMES[month];
      var year = date.getFullYear();
      return monthName + " " + day + ", " + year;
  },

  _sizeToString: function(bytes)
  {
      if (bytes === undefined)
          return "";
      var thresh = 1024;
      if (bytes < thresh)
          return bytes + ' B';
      var units = ['KB','MB','GB','TB'];
      var u = -1;
      do {
          bytes /= thresh;
          ++u;
      } while(bytes >= thresh);
      return bytes.toFixed(1) + ' ' + units[u];
  }
});
