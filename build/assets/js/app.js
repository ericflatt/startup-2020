$(document).ready(function(){$("a").on("click",function(n){if(""!==this.hash){n.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e})}})}),$(function(){$("#contactButton").click(function(){$(".contactFormContainer").addClass("active")}),$(".cancelButton").click(function(){$(".contactFormContainer").removeClass("active")})}),$("#nav").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:750,scrollThreshold:.5,filter:"",easing:"swing",begin:function(){},end:function(){},scrollChange:function(n){}}),$('input[type="checkbox"]').on("change",function(){$('input[type="checkbox"]').not(this).prop("checked",!1)});var countDownDate=new Date("Feb 7, 2020 12:00:00").getTime(),x=setInterval(function(){var n=(new Date).getTime(),e=countDownDate-n,t=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),c=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);document.getElementById("countdown").innerHTML=t+"d "+o+"h "+c+"m "+a+"s ",e<0&&(clearInterval(x),document.getElementById("countdown").innerHTML="EXPIRED")},1e3);