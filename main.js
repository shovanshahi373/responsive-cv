import { projects, skills } from "./assets/js/variables.js";

function setup() {
  $.each(skills, function (i, obj) {
    const $tr = $("<tr></tr>");
    const $td = $("<td></td>");
    const $icon = $("<img></img>").attr("src", obj.img).addClass("icon");
    $td.append($icon);
    const $td1 = $("<td></td>").text(obj.name);
    const $td2 = $("<td></td>");
    const $skillMeter = $("<span></span>").addClass("skill-meter");
    const $skillMeterValue = $("<span></span>")
      .addClass("skill-meter-value")
      .delay(2000)
      .animate({ width: obj.score * 100 + "%" }, 2000);
    $skillMeter.append($skillMeterValue);
    $td2.append($skillMeter);
    $tr.append($td, $td1, $td2);
    $(".skill-table").append($tr);
  });
  $(".toggle-group").each(function () {
    $(this).on("click", function () {
      $(this).parent().next().slideToggle();
    });
  });

  $.each(projects, function (i, obj) {
    const project = $("<div></div>").addClass("project");
    const projectTitle = $("<h3></h3>")
      .text(obj.title)
      .addClass("project-title");
    projectTitle.on("click", function () {
      $(this).next().toggleClass("active");
    });
    const projectDesc = $("<p></p>").text(obj.body).addClass("project-desc");
    project.append(projectTitle, projectDesc);
    $(".projects-list").append(project);
  });
}

$(function () {
  setup();
});
