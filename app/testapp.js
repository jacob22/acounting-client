/*
Copyright 2019 Open End AB

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

Ext.Loader.setConfig({
    enabled: true
})


Ext.require([
    'Ext.direct.Manager',
    'Bokf.lib.BLMTypes',
    // Firefox can't find these on its own:
    'Ext.dom.Layer',
    'Ext.FocusManager'
])


Ext.require('Bokf.Application', function() {
    Ext.application(Ext.apply(Bokf.Application, {
        paths: {'Bokf': '/app'}
    }))
})
