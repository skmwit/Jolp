/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[24],{1127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return NotesTabContent}));var external_kbnSharedDeps_LodashFp_=__webpack_require__(7),external_kbnSharedDeps_ElasticEui_=__webpack_require__(74),external_kbnSharedDeps_React_=__webpack_require__(6),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),lib=__webpack_require__(110),external_kbnSharedDeps_StyledComponents_=__webpack_require__(75),external_kbnSharedDeps_StyledComponents_default=__webpack_require__.n(external_kbnSharedDeps_StyledComponents_),sourcerer=__webpack_require__(130),model=__webpack_require__(124),timeline=__webpack_require__(113),use_selector=__webpack_require__(114),types_timeline=__webpack_require__(111),app=__webpack_require__(180),add_note=__webpack_require__(765),translations=__webpack_require__(304),cases_translations=__webpack_require__(34),note_previews=__webpack_require__(509),reselect_lib=__webpack_require__(128);var side_panel=__webpack_require__(283);const FullWidthFlexGroup=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup).withConfig({displayName:"FullWidthFlexGroup",componentId:"sc-1wox91s-0"})(["width:100%;margin:0;overflow:hidden;"]),ScrollableFlexItem=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiFlexItem).withConfig({displayName:"ScrollableFlexItem",componentId:"sc-1wox91s-1"})(["overflow-x:hidden;overflow-y:auto;"]),VerticalRule=external_kbnSharedDeps_StyledComponents_default.a.div.withConfig({displayName:"VerticalRule",componentId:"sc-1wox91s-2"})(["width:2px;height:100%;background:",";"],({theme:theme})=>theme.eui.euiColorLightShade),StyledPanel=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiPanel).withConfig({displayName:"StyledPanel",componentId:"sc-1wox91s-3"})(["border:0;box-shadow:none;"]),StyledEuiFlexGroup=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiFlexGroup).withConfig({displayName:"StyledEuiFlexGroup",componentId:"sc-1wox91s-4"})(["flex:0;"]),Username=external_kbnSharedDeps_StyledComponents_default()(external_kbnSharedDeps_ElasticEui_.EuiText).withConfig({displayName:"Username",componentId:"sc-1wox91s-5"})(["font-weight:bold;"]),UsernameWithAvatarComponent=({username:username})=>external_kbnSharedDeps_React_default.a.createElement(StyledEuiFlexGroup,{gutterSize:"s",responsive:!1,alignItems:"center"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,{grow:!1},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiAvatar,{"data-test-subj":"avatar",name:username,size:"l"})),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiFlexItem,null,external_kbnSharedDeps_React_default.a.createElement(Username,null,username))),UsernameWithAvatar=external_kbnSharedDeps_React_default.a.memo(UsernameWithAvatarComponent),ParticipantsComponent=({users:users})=>{const List=Object(external_kbnSharedDeps_React_.useMemo)(()=>users.map(user=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_.Fragment,{key:user.updatedBy},external_kbnSharedDeps_React_default.a.createElement(UsernameWithAvatar,{key:user.updatedBy,username:user.updatedBy}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}))),[users]);return users.length?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h4",null,cases_translations.G)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"s"}),List):null};ParticipantsComponent.displayName="ParticipantsComponent";const Participants=external_kbnSharedDeps_React_default.a.memo(ParticipantsComponent),NotesTabContentComponent=({timelineId:timelineId})=>{const dispatch=Object(lib.useDispatch)(),getTimelineNotes=Object(external_kbnSharedDeps_React_.useMemo)(()=>Object(reselect_lib.createSelector)(timeline.b.selectTimeline,timeline=>{var _timeline$expandedDet,_timeline$eventIdToNo;return{createdBy:timeline.createdBy,expandedDetail:null!==(_timeline$expandedDet=timeline.expandedDetail)&&void 0!==_timeline$expandedDet?_timeline$expandedDet:{},eventIdToNoteIds:null!==(_timeline$eventIdToNo=null==timeline?void 0:timeline.eventIdToNoteIds)&&void 0!==_timeline$eventIdToNo?_timeline$eventIdToNo:{},noteIds:timeline.noteIds,status:timeline.status}}),[]),{createdBy:createdBy,expandedDetail:expandedDetail,eventIdToNoteIds:eventIdToNoteIds,noteIds:noteIds,status:timelineStatus}=Object(use_selector.a)(state=>getTimelineNotes(state,timelineId)),{browserFields:browserFields,docValueFields:docValueFields}=Object(sourcerer.b)(model.SourcererScopeName.timeline),getNotesAsCommentsList=Object(external_kbnSharedDeps_React_.useMemo)(()=>app.c.selectNotesAsCommentsListSelector(),[]),[newNote,setNewNote]=Object(external_kbnSharedDeps_React_.useState)(""),isImmutable=timelineStatus===types_timeline.i.immutable,appNotes=Object(use_selector.a)(getNotesAsCommentsList),allTimelineNoteIds=Object(external_kbnSharedDeps_React_.useMemo)(()=>{const eventNoteIds=Object.values(eventIdToNoteIds).reduce((acc,v)=>[...acc,...v],[]);return[...noteIds,...eventNoteIds]},[noteIds,eventIdToNoteIds]),notes=Object(external_kbnSharedDeps_React_.useMemo)(()=>appNotes.filter(appNote=>{var _appNote$noteId;return allTimelineNoteIds.includes(null!==(_appNote$noteId=null==appNote?void 0:appNote.noteId)&&void 0!==_appNote$noteId?_appNote$noteId:"-1")}),[appNotes,allTimelineNoteIds]),participants=Object(external_kbnSharedDeps_React_.useMemo)(()=>Object(external_kbnSharedDeps_LodashFp_.uniqBy)("updatedBy",Object(external_kbnSharedDeps_LodashFp_.filter)("savedObjectId",notes)),[notes]),associateNote=Object(external_kbnSharedDeps_React_.useCallback)(noteId=>dispatch(timeline.a.addNote({id:timelineId,noteId:noteId})),[dispatch,timelineId]),handleOnPanelClosed=Object(external_kbnSharedDeps_React_.useCallback)(()=>{dispatch(timeline.a.toggleDetailPanel({tabType:types_timeline.j.notes,timelineId:timelineId}))},[dispatch,timelineId]),DetailsPanelContent=Object(external_kbnSharedDeps_React_.useMemo)(()=>{var _expandedDetail$Timel;return null!==(_expandedDetail$Timel=expandedDetail[types_timeline.j.notes])&&void 0!==_expandedDetail$Timel&&_expandedDetail$Timel.panelView?external_kbnSharedDeps_React_default.a.createElement(side_panel.a,{browserFields:browserFields,docValueFields:docValueFields,handleOnPanelClosed:handleOnPanelClosed,tabType:types_timeline.j.notes,timelineId:timelineId}):null},[browserFields,docValueFields,expandedDetail,handleOnPanelClosed,timelineId]),SidebarContent=Object(external_kbnSharedDeps_React_.useMemo)(()=>external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,createdBy&&external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_React_default.a.Fragment,null,external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"m"}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,{size:"xs"},external_kbnSharedDeps_React_default.a.createElement("h4",null,translations.c)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiHorizontalRule,{margin:"s"}),external_kbnSharedDeps_React_default.a.createElement(UsernameWithAvatar,{username:createdBy}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"xxl"})),external_kbnSharedDeps_React_default.a.createElement(Participants,{users:participants})),[createdBy,participants]);return external_kbnSharedDeps_React_default.a.createElement(FullWidthFlexGroup,null,external_kbnSharedDeps_React_default.a.createElement(ScrollableFlexItem,{grow:2},external_kbnSharedDeps_React_default.a.createElement(StyledPanel,{paddingSize:"s"},external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiTitle,null,external_kbnSharedDeps_React_default.a.createElement("h3",null,translations.e)),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,null),external_kbnSharedDeps_React_default.a.createElement(note_previews.a,{eventIdToNoteIds:eventIdToNoteIds,notes:notes,timelineId:timelineId}),external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiSpacer,{size:"s"}),!isImmutable&&external_kbnSharedDeps_React_default.a.createElement(add_note.a,{associateNote:associateNote,newNote:newNote,updateNewNote:setNewNote}))),external_kbnSharedDeps_React_default.a.createElement(VerticalRule,null),external_kbnSharedDeps_React_default.a.createElement(ScrollableFlexItem,{grow:1},null!=DetailsPanelContent?DetailsPanelContent:SidebarContent))};NotesTabContentComponent.displayName="NotesTabContentComponent";const NotesTabContent=external_kbnSharedDeps_React_default.a.memo(NotesTabContentComponent)}}]);