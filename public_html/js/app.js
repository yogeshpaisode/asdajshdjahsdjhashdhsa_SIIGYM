//--GLOBAL--

var index_controller;

function onLoad() {
    //document.addEventListener("deviceready", onDeviceReady, false);
}//--Declared at onBoday Load in INDEX.html

function onDeviceReady() {


}//--Handle device level operation

function back() {
    window.history.back();
}

//--Panel Activity---

$("#profile").click(function () {
    $("#profile_Panel").panel("toggle");
});// Profile Panel

$("#school").click(function () {
    $("#school_Panel").panel("toggle");
});//school_Panel

$("#academic").click(function () {
    $("#academic_Panel").panel("toggle");
});//academic_Panel

$("#write_to_us").click(function () {
    $("#write_to_us_Panel").panel("toggle");
});//--Write to us

//--Angular JS------------------

var mygiis = angular.module("mygiis", ['ngRoute', 'ngAnimate']);
mygiis.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
                when("/home", {
                    templateUrl: "template/home.html",
                    controller: "home"
                }).//--Rpofile
                when("/view_Profile", {
                    templateUrl: "template/profile/view_Profile.html",
                    controller: "view_Profile"
                }).
                when("/edit_login_information", {
                    templateUrl: "template/profile/edit_login_information.html",
                    controller: "edit_login_information"
                }).
                when("/feedback", {
                    templateUrl: "template/profile/feedback.html",
                    controller: "feedback"
                }).//--School
                when("/fees_Payment_History", {
                    templateUrl: "template/school/fees_Payment_History.html",
                    controller: "fees_Payment_History"
                }).
                when("/time_table", {
                    templateUrl: "template/school/time_table.html",
                    controller: "time_table"
                }).
                when("/giis_Directory", {
                    templateUrl: "template/school/giis_Directory.html",
                    controller: "giis_Directory"
                }).
                when("/calender", {
                    templateUrl: "template/school/calender.html",
                    controller: "giis_Directory"
                }).//--Academic
                when("/list_of_Syllabus", {
                    templateUrl: "template/academics/list_of_Syllabus.html",
                    controller: "list_of_Syllabus"
                }).
                when("/list_of_Worksheet", {
                    templateUrl: "template/academics/list_of_Worksheet.html",
                    controller: "list_of_Worksheet"
                }).
                when("/view_result", {
                    templateUrl: "template/academics/view_result.html",
                    controller: "view_result"
                }).//--Write To Us ( Messaging )
                when("/inbox_Parent", {
                    templateUrl: "template/write_To_Us/messaging/inbox_Parent.html",
                    controller: "inbox_Parent"
                }).
                when("/inbox_Child", {
                    templateUrl: "template/write_To_Us/messaging/inbox_Child.html",
                    controller: "inbox_Child"
                }).
                when("/sent_Email", {
                    templateUrl: "template/write_To_Us/messaging/sent_Email.html",
                    controller: "sent_Email"
                }).
                when("/write_To_Teacher", {
                    templateUrl: "template/write_To_Us/messaging/write_To_Teacher.html",
                    controller: "write_To_Teacher"
                }).
                when("/email_staff", {
                    templateUrl: "template/write_To_Us/messaging/email_staff.html",
                    controller: "email_staff"
                }).
                when("/email_Admin", {
                    templateUrl: "template/write_To_Us/messaging/email_Admin.html",
                    controller: "email_Admin"
                }).
                otherwise({
                    redirectTo: "/home"
                });
    }]);//--End of Config


//---Handle all controller

function common() {
    $(".carousel_image_video").panel("close");
}

mygiis.controller("index_controller", function ($scope) {
    common();
    index_controller = $scope;
});

mygiis.controller("home", function ($scope) {
    common();
});

//--Profile-----------------------------------------------------------
mygiis.controller("view_Profile", function ($scope) {
    common();
});

mygiis.controller("edit_login_information", function ($scope) {
    common();
});

mygiis.controller("feedback", function ($scope) {
    common();
});


//--School-----------------------------------------------------------

mygiis.controller("fees_Payment_History", function ($scope) {
    common();
});

mygiis.controller("time_table", function ($scope) {
    common();
});

mygiis.controller("giis_Directory", function ($scope) {
    common();
});

mygiis.controller("calender", function ($scope) {
    common();
});

//--Academics-----------------------------------------------------------

mygiis.controller("list_of_Syllabus", function ($scope) {
    common();
});

mygiis.controller("list_of_Worksheet", function ($scope) {
    common();
});

mygiis.controller("view_result", function ($scope) {
    common();
});

//--Write To Us ( Messaging )-----------------------------------------------------------

mygiis.controller("inbox_Parent", function ($scope) {
    common();
});

mygiis.controller("inbox_Child", function ($scope) {
    common();
});

mygiis.controller("sent_Email", function ($scope) {
    common();
});

mygiis.controller("write_To_Teacher", function ($scope) {
    common();
});

mygiis.controller("email_staff", function ($scope) {
    common();
});

mygiis.controller("email_Admin", function ($scope) {
    common();
});