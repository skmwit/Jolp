/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.savedObjectsTagging_bundle_jsonpfunction=window.savedObjectsTagging_bundle_jsonpfunction||[]).push([[3],{29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getRandomColor})),__webpack_require__.d(__webpack_exports__,"c",(function(){return validateTag})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useIfMounted}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);const getRandomColor=()=>"#"+String(Math.floor(16777215*Math.random()).toString(16)).padStart(6,"0"),validateTag=tag=>{const validation={valid:!0,warnings:[],errors:{}};return validation.errors.name=Object(_common__WEBPACK_IMPORTED_MODULE_1__.h)(tag.name),validation.errors.color=Object(_common__WEBPACK_IMPORTED_MODULE_1__.f)(tag.color),validation.errors.description=Object(_common__WEBPACK_IMPORTED_MODULE_1__.g)(tag.description),Object.values(validation.errors).forEach(error=>{error&&(validation.valid=!1)}),validation},useIfMounted=()=>{const isMounted=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>{isMounted.current=!1},[]);return Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(func=>{isMounted.current&&func&&func()},[])}},30:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CreateOrEditModal}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_elastic_eui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(29);const CreateOrEditModal=({onClose:onClose,onSubmit:onSubmit,validation:validation,setField:setField,tag:tag,mode:mode})=>{const optionalMessageId=Object(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.htmlIdGenerator)()(),ifMounted=Object(_utils__WEBPACK_IMPORTED_MODULE_6__.b)(),[submitting,setSubmitting]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),initialName=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>tag.name,[]),setName=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>setField("name"),[setField]),setColor=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>setField("color"),[setField]),setDescription=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>setField("description"),[setField]),isEdit=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>"edit"===mode,[mode]),previewTag=Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...tag,name:tag.name||"tag",color:Object(_common__WEBPACK_IMPORTED_MODULE_4__.f)(tag.color)?"#000000":tag.color}),[tag]),onFormSubmit=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async()=>{setSubmitting(!0),await onSubmit(),ifMounted(()=>{setSubmitting(!1)})},[ifMounted,onSubmit]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiModal,{onClose:onClose,initialFocus:"[name=name]",style:{minWidth:"600px"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiModalHeader,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiModalHeaderTitle,null,isEdit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.editModal.title",defaultMessage:"Edit '{name}' tag",values:{name:initialName}}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.createModal.title",defaultMessage:"Create tag"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiModalBody,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiForm,{"data-test-subj":"tagModalForm",component:"form"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"baseline"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:3},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{"data-test-subj":"createModalRow-name",fullWidth:!0,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.savedObjectsTagging.tagAttributeLabels.name",{defaultMessage:"Name"}),isInvalid:!!validation.errors.name,error:validation.errors.name},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFieldText,{name:"name",fullWidth:!0,maxLength:_common__WEBPACK_IMPORTED_MODULE_4__.d,value:tag.name,onChange:e=>setName(e.target.value),"data-test-subj":"createModalField-name"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:2},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{"data-test-subj":"createModalRow-color",fullWidth:!0,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.savedObjectsTagging.tagAttributeLabels.color",{defaultMessage:"Color"}),isInvalid:!!validation.errors.color,error:validation.errors.color,labelAppend:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiButtonEmpty,{onClick:()=>setColor(Object(_utils__WEBPACK_IMPORTED_MODULE_6__.a)()),size:"xs",style:{height:"18px",fontSize:"0.75rem"},"aria-label":_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.savedObjectsTagging.management.createModal.color.randomizeAriaLabel",{defaultMessage:"Randomize tag color"})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.createModal.color.randomize",defaultMessage:"Randomize"}))},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiColorPicker,{color:tag.color,fullWidth:!0,onChange:text=>setColor(text),format:"hex","data-test-subj":"createModalField-color"})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiSpacer,{size:"s"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFormRow,{"data-test-subj":"createModalRow-description",fullWidth:!0,label:_kbn_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.translate("xpack.savedObjectsTagging.tagAttributeLabels.description",{defaultMessage:"Description"}),labelAppend:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiText,{size:"xs",color:"subdued",id:optionalMessageId},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.optionalFieldText",defaultMessage:"Optional"})),isInvalid:!!validation.errors.description,error:validation.errors.description},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiTextArea,{name:"description",value:tag.description,maxLength:_common__WEBPACK_IMPORTED_MODULE_4__.c,onChange:e=>setDescription(e.target.value),"data-test-subj":"createModalField-description",resize:"none",fullWidth:!0,compressed:!0,"aria-describedby":optionalMessageId})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiModalFooter,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"baseline"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{gutterSize:"s",justifyContent:"spaceBetween",alignItems:"baseline"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiText,{size:"xs",color:"subdued"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.tagPreviewText",defaultMessage:"Preview"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.a,{tag:previewTag})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"baseline"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiButtonEmpty,{onClick:onClose,"data-test-subj":"createModalCancelButton"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.createModal.closeButtonText",defaultMessage:"Cancel"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiFlexItem,{grow:!1},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__.EuiButton,{iconType:isEdit?"save":"tag",color:"primary",fill:!0,"data-test-subj":"createModalConfirmButton",onClick:onFormSubmit,isDisabled:submitting},isEdit?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.createModal.updateTagButtonLabel",defaultMessage:"Save changes"}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_kbn_i18n_react__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage,{id:"xpack.savedObjectsTagging.management.createModal.createTagButtonLabel",defaultMessage:"Create tag"}))))))))}},52:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CreateTagModal",(function(){return CreateTagModal}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_services_tags__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_create_or_edit_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30);const initialValidation={valid:!0,warnings:[],errors:{}},CreateTagModal=({defaultValues:defaultValues,tagClient:tagClient,onClose:onClose,onSave:onSave})=>{const[validation,setValidation]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValidation),[tagAttributes,setTagAttributes]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)((providedDefaults=defaultValues,{name:"",description:"",color:Object(_utils__WEBPACK_IMPORTED_MODULE_2__.a)(),...providedDefaults}));var providedDefaults;const setField=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(field=>value=>{setTagAttributes(current=>({...current,[field]:value}))},[]),onSubmit=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async()=>{const clientValidation=Object(_utils__WEBPACK_IMPORTED_MODULE_2__.c)(tagAttributes);if(setValidation(clientValidation),clientValidation.valid)try{const createdTag=await tagClient.create(tagAttributes);onSave(createdTag)}catch(e){Object(_services_tags__WEBPACK_IMPORTED_MODULE_1__.c)(e.body)&&setValidation(e.body.attributes)}},[tagAttributes,tagClient,onSave]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_create_or_edit_modal__WEBPACK_IMPORTED_MODULE_3__.a,{onClose:onClose,onSubmit:onSubmit,mode:"create",tag:tagAttributes,setField:setField,validation:validation})}}}]);