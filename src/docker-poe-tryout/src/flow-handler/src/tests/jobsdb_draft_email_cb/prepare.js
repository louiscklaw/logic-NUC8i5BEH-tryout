const fs = require('fs');

(async () => {
  await fs.writeFileSync(
    '/share/100003010533674/meta.json',
    JSON.stringify({
      jobsdb_job_url:
        'https://hk.jobsdb.com/hk/en/job/application-support-vba-javascript-over-%2440k-multiple-vacancies-100003010564679',
      working_dir: '/share/100003010564679',
    }),
    { encoding: 'utf8' },
  );

  await fs.writeFileSync(
    '/share/100003010533674/100_extract_result.json',
    JSON.stringify(
        {
            "jobsdb_job_url": "https://hk.jobsdb.com/hk/en/job/application-support-vba-javascript-over-%2440k-multiple-vacancies-100003010564679",
            "post_id": "100003010564679",
            "__jobDescriptionRawProcessed": "<div data-automation=\"jobDescription\" class=\"_1x1c7ng0\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i1 y44q7i21 y44q7ii\"><div class=\"z1s6m00\"><p><strong><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Job Description:</span></strong>{{this_should_be_a_newline}}</p><ul><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To provide technical support for the full implementation and rollout</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in coordinating with department regarding the rollout schedule, customization and preparation work</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To develop test cases and conduct UAT</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in reviewing project deliverables</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To maintain and support system encryption module</span></li></ul><p><strong><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Requirement Details:</span></strong>{{this_should_be_a_newline}}</p><ul><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Higher Diploma or above</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">At least have 2 years’ experience in IT experience</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Experience in client software deployment tool for Windows operating system such as ZenWorks</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Priority will be given to candidate who is willing to learn and proactive, possesses strong analytical, problem solving, communication and inter-personal skills</span></li></ul></div></span></div>",
            "_debugList": [
              "Search Jobs",
              "CL Technical Services Ltd.",
              "Cheung Sha Wan",
              "Posted 19 hours ago",
              "",
              "",
              "",
              "<span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span>",
              "Apply Now",
              "",
              "",
              "",
              "<span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span>",
              "Apply Now",
              "CL Technical Services Ltd.",
              "",
              "",
              "",
              "<span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span>",
              "Apply Now"
            ],
            "_jobDescriptionMd": "<p>Job Description:</p>\n\n- To provide technical support for the full implementation and rollout\n\n- To assist in coordinating with department regarding the rollout schedule, customization and preparation work\n\n- To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department\n\n- To develop test cases and conduct UAT\n\n- To assist in reviewing project deliverables\n\n- To maintain and support system encryption module\n\n<p>Requirement Details:</p>\n\n- Higher Diploma or above\n\n- At least have 2 years’ experience in IT experience\n\n- Experience in client software deployment tool for Windows operating system such as ZenWorks\n\n- Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet\n\n- Priority will be given to candidate who is willing to learn and proactive, possesses  analytical, problem solving, communication and inter-personal skills",
            "_jobDescriptionRaw": "<div data-automation=\"jobDescription\" class=\"_1x1c7ng0\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i1 y44q7i21 y44q7ii\"><div class=\"z1s6m00\"><p><strong><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Job Description:</span></strong></p><ul><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To provide technical support for the full implementation and rollout</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in coordinating with department regarding the rollout schedule, customization and preparation work</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To develop test cases and conduct UAT</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To assist in reviewing project deliverables</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">To maintain and support system encryption module</span></li></ul><p><strong><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Requirement Details:</span></strong></p><ul><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Higher Diploma or above</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">At least have 2 years’ experience in IT experience</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Experience in client software deployment tool for Windows operating system such as ZenWorks</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet</span></li><li><span style=\"font-family:arial,helvetica,sans-serif;font-size:12pt\">Priority will be given to candidate who is willing to learn and proactive, possesses strong analytical, problem solving, communication and inter-personal skills</span></li></ul></div></span></div>",
            "_jobDetailsHeaderRawHTML": "<div class=\"z1s6m00 _1hbhsw6ce y44q7i18 y44q7i1b _1hbhsw632 _1hbhsw635\" data-automation=\"jobDetailsHeader\"><div class=\"sticky-outer-wrapper\" style=\"height:\"><div class=\"kt8mbqa\" style=\"position:static;top:0px;z-index:501\"><div class=\"z1s6m00 _1hbhsw66m _1hbhsw67q _1hbhsw6a6 _1hbhsw692 _1hbhsw64w kt8mbqb\"><a href=\"/hk/en/Search/FindJobs?JSRV=1&amp;page=1\" class=\"z1s6m00 z1s6m0f kt8mbqc\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" focusable=\"false\" fill=\"currentColor\" width=\"16\" height=\"16\" class=\"z1s6m00 c2r5180 y44q7i23 _1hbhsw64y _1uph4a8a of5ilj0 c2r5181\" aria-hidden=\"true\"><path d=\"M20.7 7.3c-.4-.4-1-.4-1.4 0L12 14.6 4.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8 8c.2.2.5.3.7.3s.5-.1.7-.3l8-8c.4-.4.4-1 0-1.4z\"></path></svg><div class=\"z1s6m00 _1hbhsw6ea\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i3 y44q7i23 _1d0g9qk4 y44q7ia\">Search Jobs</span></div></a></div></div></div><img src=\"https://image-service-cdn.seek.com.au/7246b19941b175f0e2777bc7cb2a26c0c31bfe7e/a868bcb8fbb284f4e8301904535744d488ea93c1\" class=\"_17e1xpa0\" data-automation=\"job-details-banner\"><div class=\"z1s6m00 _1hbhsw64y _1hbhsw65c _1hbhsw6ga _1hbhsw6g4 _5135ge2j _5135ge2x\"><div class=\"z1s6m00 _1hbhsw6r _1hbhsw6p _1hbhsw6gy dgyvzc0 dgyvzc4\"><div class=\"z1s6m00 _1hbhsw6aq _1hbhsw6a4 _1hbhsw66q _1hbhsw67g _1hbhsw6n _1hbhsw64y _1hbhsw6fm dgyvzc1\"><div class=\"z1s6m00 _5135ge0 _5135ge5\"><div class=\"z1s6m00 _1hbhsw66q\"><div class=\"z1s6m00 _1hbhsw65a _1hbhsw65e _1hbhsw6ga\"><div class=\"z1s6m00 _5135ge0 _5135ge5\"><div class=\"z1s6m00 _1hbhsw66q\"><div class=\"z1s6m00 _1hbhsw67y _1hbhsw66u _1hbhsw6a6 _1hbhsw692 _1hbhsw6ay _1hbhsw65a huidxb0 y44q7i18 y44q7i1b _1hbhsw632 _1hbhsw635\"><img class=\"huidxb1\" src=\"https://image-service-cdn.seek.com.au/bdeceae33cc14f138b032b6e7f08b31760732706/ee4dce1061f3f616224767ad58cb2fc751b8d2dc\" alt=\"CL Technical Services Ltd.\"></div></div><div class=\"z1s6m00 _1hbhsw66q\"><div class=\"z1s6m00 _1hbhsw6a6 _1hbhsw692 _1hbhsw67e\"><div class=\"z1s6m00\" data-automation=\"detailsTitle\"><div class=\"z1s6m00 _5135ge0 _5135ge6\"><div class=\"z1s6m00 _1hbhsw66u\"><h1 class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7il _1d0g9qk4 y44q7is y44q7i21\">Application Support (VBA / JavaScript, over $40K, Multiple vacancies)</h1></div><div class=\"z1s6m00 _1hbhsw66u\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">CL Technical Services Ltd.</span></div></div></div></div></div></div></div></div><div class=\"z1s6m00 _1hbhsw66q\"><div class=\"z1s6m00 _1hbhsw65a _1hbhsw65e _1hbhsw6ga kt8mbq0\"><div class=\"z1s6m00 _1hbhsw64y _1hbhsw67u _1hbhsw683 _1hbhsw6a6 _1hbhsw6p\"><div class=\"z1s6m00 _5135ge0 _5135ge3\"><div class=\"z1s6m00 _1hbhsw66i\"><div class=\"z1s6m00 _1hbhsw65a\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i1 y44q7i21 y44q7ii\">Cheung Sha Wan</span></div></div><div class=\"z1s6m00 _1hbhsw66i\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i1 y44q7i21 y44q7ii\">Posted 19 hours ago</span></div></div></div></div></div></div></div></div><div class=\"z1s6m00 _1hbhsw6r _1hbhsw6p _1hbhsw6gy dgyvzc0 dgyvzc3\"><div class=\"z1s6m00 _1hbhsw6aq _1hbhsw6a4 _1hbhsw66q _1hbhsw67g _1hbhsw6n _1hbhsw64y _1hbhsw6fm dgyvzc1\"><div class=\"z1s6m00 kt8mbq1\"><div class=\"_12gqfhb2\"><div class=\"z1s6m00 _1hbhsw65a _1hbhsw6g2 _1hbhsw6g3 _1hbhsw6gg _1hbhsw6p _1hbhsw6fe\"><div class=\"z1s6m00 _1hbhsw6fq _12gqfhb7\"><div class=\"z1s6m00 _1hbhsw6gy\" data-automation=\"applyNowButtonWrapper\"><a rel=\"nofollow\" color=\"callToAction\" data-automation=\"applyNowButton\" class=\"z1s6m00 _1hbhsw662 _1hbhsw6p _1hbhsw65e _1hbhsw64y _1hbhsw6y _1hbhsw6x _1hbhsw65 _1hbhsw6h6 _1hbhsw64 _1hbhsw6h sq9vny0 sq9vny6 y44q7i19 y44q7i1b _1hbhsw616 _1hbhsw617\" target=\"_blank\" href=\"/hk/en/job/100003010564679/apply-preview?fr=7&amp;jobId=100003010564679&amp;sectionRank=1&amp;token=0~00000000-0000-4000-8000-000000000000&amp;trackData=%7B%22ApplySource%22%3A1%7D\"><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 _6f7o1a0 sq9vny4 _1hbhsw64s _1hbhsw64t\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny3 y44q7i19 y44q7i1b _1hbhsw61a _1hbhsw61b\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny2 y44q7i19 y44q7i1b _1hbhsw618 _1hbhsw619\"></span><span class=\"z1s6m00 _1hbhsw6a6 _1hbhsw692 _1hbhsw65e _1hbhsw65a _1hbhsw6fq _1hbhsw6gi _1hbhsw60 _1hbhsw6i sq9vny9\"><span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span></span></a></div></div></div></div><div class=\"z1s6m00 _1hbhsw65m _1hbhsw6p _1hbhsw65a _1hbhsw64z _12gqfhb2 _12gqfhb3 _12gqfhb1 _12gqfhb4 y44q7i18 y44q7i1b _1hbhsw632 _1hbhsw635\"><div class=\"z1s6m00 _12gqfhb7\"><div class=\"z1s6m00 _1hbhsw6gy\" data-automation=\"applyNowButtonWrapper\"><a rel=\"nofollow\" color=\"callToAction\" data-automation=\"applyNowButton\" class=\"z1s6m00 _1hbhsw662 _1hbhsw6p _1hbhsw65e _1hbhsw64y _1hbhsw6y _1hbhsw6x _1hbhsw65 _1hbhsw6h6 _1hbhsw64 _1hbhsw6h sq9vny0 sq9vny6 y44q7i19 y44q7i1b _1hbhsw616 _1hbhsw617\" target=\"_blank\" href=\"/hk/en/job/100003010564679/apply-preview?fr=7&amp;jobId=100003010564679&amp;sectionRank=1&amp;token=0~00000000-0000-4000-8000-000000000000&amp;trackData=%7B%22ApplySource%22%3A1%7D\"><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 _6f7o1a0 sq9vny4 _1hbhsw64s _1hbhsw64t\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny3 y44q7i19 y44q7i1b _1hbhsw61a _1hbhsw61b\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny2 y44q7i19 y44q7i1b _1hbhsw618 _1hbhsw619\"></span><span class=\"z1s6m00 _1hbhsw6a6 _1hbhsw692 _1hbhsw65e _1hbhsw65a _1hbhsw6fq _1hbhsw6gi _1hbhsw60 _1hbhsw6i sq9vny9\"><span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span></span></a></div></div></div></div></div></div></div><div class=\"sticky-outer-wrapper kt8mbq2\" style=\"height:\"><div class=\"kt8mbq4 kt8mbq3\" style=\"position:static;top:0px;z-index:501\"><div class=\"z1s6m00 _1hbhsw66m _1hbhsw67q _1hbhsw6ae _1hbhsw69a _1hbhsw65a _1hbhsw6fe kt8mbq7\"><div class=\"z1s6m00 _1hbhsw692 kt8mbq8\"><div class=\"z1s6m00\" data-automation=\"detailsTitle\"><div class=\"z1s6m00 _5135ge0 _5135ge6\"><div class=\"z1s6m00 _1hbhsw66u\"><h1 class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7il _1d0g9qk4 y44q7iv y44q7i21\">Application Support (VBA / JavaScript, over $40K, Multiple vacancies)</h1></div><div class=\"z1s6m00 _1hbhsw66u\"><span class=\"z1s6m00 _1hbhsw64y y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">CL Technical Services Ltd.</span></div></div></div></div><div class=\"z1s6m00\"><div class=\"z1s6m00 _5135ge0 _5135ge5\"><div class=\"z1s6m00 _1hbhsw6gi _1hbhsw65a _1hbhsw6g2 _5135ge2d\"><div class=\"z1s6m00 _1hbhsw6r _1hbhsw6ei _1hbhsw6b6 _1hbhsw64y _1hbhsw6fm\"><div class=\"z1s6m00 kt8mbqd\"><div class=\"z1s6m00 _1hbhsw6gy\" data-automation=\"applyNowButtonWrapper\"><a rel=\"nofollow\" color=\"callToAction\" data-automation=\"applyNowButton\" class=\"z1s6m00 _1hbhsw662 _1hbhsw6p _1hbhsw65e _1hbhsw64y _1hbhsw6y _1hbhsw6x _1hbhsw65 _1hbhsw6h6 _1hbhsw64 _1hbhsw6h sq9vny0 sq9vny6 y44q7i19 y44q7i1b _1hbhsw616 _1hbhsw617\" target=\"_blank\" href=\"/hk/en/job/100003010564679/apply-preview?fr=7&amp;jobId=100003010564679&amp;sectionRank=1&amp;token=0~00000000-0000-4000-8000-000000000000&amp;trackData=%7B%22ApplySource%22%3A1%7D\"><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 _6f7o1a0 sq9vny4 _1hbhsw64s _1hbhsw64t\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny3 y44q7i19 y44q7i1b _1hbhsw61a _1hbhsw61b\"></span><span class=\"z1s6m00 _1hbhsw6j _1hbhsw6k _1hbhsw6l _1hbhsw6m _1hbhsw65i _1hbhsw6i _1hbhsw662 _1hbhsw6w _1hbhsw66 sq9vny2 y44q7i19 y44q7i1b _1hbhsw618 _1hbhsw619\"></span><span class=\"z1s6m00 _1hbhsw6a6 _1hbhsw692 _1hbhsw65e _1hbhsw65a _1hbhsw6fq _1hbhsw6gi _1hbhsw60 _1hbhsw6i sq9vny9\"><span class=\"z1s6m00 _1hbhsw64y _1hbhsw6h6 y44q7i0 y44q7i2 y44q7i21 _1d0g9qk4 y44q7ia\">Apply Now</span></span></a></div></div></div></div></div></div></div></div></div></div>",
            "companyName": "CL Technical Services Ltd.",
            "jobAddress": "Cheung Sha Wan",
            "jobDescription": "Job Description:\nTo provide technical support for the full implementation and rolloutTo assist in coordinating with department regarding the rollout schedule, customization and preparation workTo assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to departmentTo develop test cases and conduct UATTo assist in reviewing project deliverablesTo maintain and support system encryption moduleRequirement Details:\nHigher Diploma or aboveAt least have 2 years’ experience in IT experienceExperience in client software deployment tool for Windows operating system such as ZenWorksExperience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheetPriority will be given to candidate who is willing to learn and proactive, possesses strong analytical, problem solving, communication and inter-personal skills",
            "jobHighlight": "Cheung Sha WanJavaScript / MYSQL / VBA /Government Project",
            "jobTitle": "Application Support (VBA / JavaScript, over $40K, Multiple vacancies)",
            "postDate": "Posted 19 hours ago"
          }
    ),
    { encoding: 'utf8' },
  );

  await fs.writeFileSync(
    '/share/100003010533674/200_input_to_summarize.json',
    JSON.stringify({
      working_dir: '/share/100003010564679',
      preprompts: ['Forget everything and start a new talk.'],
      question_list: [
        'I will pass you a job advertisement, \nplease try to summarize it in around 200 words.',
        'company name: CL Technical Services Ltd.\njob title: Application Support (VBA / JavaScript, over $40K, Multiple vacancies)\njob addess: Cheung Sha Wan\npost date: Posted 19 hours ago\njob highlight: Cheung Sha WanJavaScript / MYSQL / VBA /Government Project\n\njob description (markdown):\n```\n<p>Job Description:</p>\n\n- To provide technical support for the full implementation and rollout\n\n- To assist in coordinating with department regarding the rollout schedule, customization and preparation work\n\n- To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department\n\n- To develop test cases and conduct UAT\n\n- To assist in reviewing project deliverables\n\n- To maintain and support system encryption module\n\n<p>Requirement Details:</p>\n\n- Higher Diploma or above\n\n- At least have 2 years’ experience in IT experience\n\n- Experience in client software deployment tool for Windows operating system such as ZenWorks\n\n- Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet\n\n- Priority will be given to candidate who is willing to learn and proactive, possesses  analytical, problem solving, communication and inter-personal skills\n```',
      ],
      callback_url: 'http://flow-handler:3000/jobsdb_flow_summarize_cb',
    }),
    { encoding: 'utf8' },
  );

  await fs.writeFileSync(
    '/share/100003010533674/300_summarize_result.json',
    JSON.stringify({
      state: 'ASK_DONE',
      input: {
        preprompts: ['Forget everything and start a new talk.'],
        question_list: [
          'I will pass you a job advertisement, \nplease try to summarize it in around 200 words.',
          'company name: CL Technical Services Ltd.\njob title: Application Support (VBA / JavaScript, over $40K, Multiple vacancies)\njob addess: Cheung Sha Wan\npost date: Posted 19 hours ago\njob highlight: Cheung Sha WanJavaScript / MYSQL / VBA /Government Project\n\njob description (markdown):\n```\n<p>Job Description:</p>\n\n- To provide technical support for the full implementation and rollout\n\n- To assist in coordinating with department regarding the rollout schedule, customization and preparation work\n\n- To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department\n\n- To develop test cases and conduct UAT\n\n- To assist in reviewing project deliverables\n\n- To maintain and support system encryption module\n\n<p>Requirement Details:</p>\n\n- Higher Diploma or above\n\n- At least have 2 years’ experience in IT experience\n\n- Experience in client software deployment tool for Windows operating system such as ZenWorks\n\n- Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet\n\n- Priority will be given to candidate who is willing to learn and proactive, possesses  analytical, problem solving, communication and inter-personal skills\n```',
        ],
      },
      error: '',
      chat_history: {
        q_and_a: {
          preprompts: [
            {
              question: 'Forget everything and start a new talk.',
              answer: "Sure! Let's start a new conversation. What topic or question would you like to discuss?",
            },
          ],
          history: [
            {
              question: 'I will pass you a job advertisement, \nplease try to summarize it in around 200 words.',
              answer:
                "Certainly! Please provide me with the job advertisement, and I'll do my best to summarize it for you within approximately 200 words.",
            },
            {
              question:
                'company name: CL Technical Services Ltd.\njob title: Application Support (VBA / JavaScript, over $40K, Multiple vacancies)\njob addess: Cheung Sha Wan\npost date: Posted 19 hours ago\njob highlight: Cheung Sha WanJavaScript / MYSQL / VBA /Government Project\n\njob description (markdown):\n```\n<p>Job Description:</p>\n\n- To provide technical support for the full implementation and rollout\n\n- To assist in coordinating with department regarding the rollout schedule, customization and preparation work\n\n- To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department\n\n- To develop test cases and conduct UAT\n\n- To assist in reviewing project deliverables\n\n- To maintain and support system encryption module\n\n<p>Requirement Details:</p>\n\n- Higher Diploma or above\n\n- At least have 2 years’ experience in IT experience\n\n- Experience in client software deployment tool for Windows operating system such as ZenWorks\n\n- Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet\n\n- Priority will be given to candidate who is willing to learn and proactive, possesses  analytical, problem solving, communication and inter-personal skills\n```',
              answer:
                "CL Technical Services Ltd. is currently seeking candidates for the position of Application Support, offering a salary of over $40,000. The job is located in Cheung Sha Wan, and there are multiple vacancies available. The job advertisement was posted 19 hours ago.\nThe main highlights of the job include working with JavaScript, MySQL, VBA (Visual Basic for Applications), and participating in a government project. The successful candidate will be responsible for providing technical support throughout the implementation and rollout process. This involves coordinating with various departments, users, contractors, and project stakeholders. The role also includes developing test cases, conducting user acceptance testing (UAT), reviewing project deliverables, and maintaining the system's encryption module.\nThe requirements for the position include a Higher Diploma or above and a minimum of 2 years of IT experience. Candidates should have experience with client software deployment tools for Windows operating systems, such as ZenWorks. Proficiency in using Visual Basic for Applications and MySQL to validate data and format Excel spreadsheets is also necessary. Preference will be given to candidates who demonstrate a willingness to learn, are proactive, and possess strong analytical, problem-solving, communication, and interpersonal skills.\nOverall, CL Technical Services Ltd. is seeking qualified individuals to join their team as Application Support professionals, contributing to a government project and utilizing their technical expertise in VBA, JavaScript, MySQL, and more.",
            },
          ],
        },
      },
      json_input: {
        preprompts: ['Forget everything and start a new talk.'],
        question_list: [
          'I will pass you a job advertisement, \nplease try to summarize it in around 200 words.',
          'company name: CL Technical Services Ltd.\njob title: Application Support (VBA / JavaScript, over $40K, Multiple vacancies)\njob addess: Cheung Sha Wan\npost date: Posted 19 hours ago\njob highlight: Cheung Sha WanJavaScript / MYSQL / VBA /Government Project\n\njob description (markdown):\n```\n<p>Job Description:</p>\n\n- To provide technical support for the full implementation and rollout\n\n- To assist in coordinating with department regarding the rollout schedule, customization and preparation work\n\n- To assist in coordinating with users, contractors, project stakeholders and other related parties for the implementation of system and its deployment to department\n\n- To develop test cases and conduct UAT\n\n- To assist in reviewing project deliverables\n\n- To maintain and support system encryption module\n\n<p>Requirement Details:</p>\n\n- Higher Diploma or above\n\n- At least have 2 years’ experience in IT experience\n\n- Experience in client software deployment tool for Windows operating system such as ZenWorks\n\n- Experience in using Visual Basic for Applications / MySQL to validate the data and format in Excel spreadsheet\n\n- Priority will be given to candidate who is willing to learn and proactive, possesses  analytical, problem solving, communication and inter-personal skills\n```',
        ],
      },
      working_dir: '/share/100003010564679',
    }),
    { encoding: 'utf8' },
  );
})();
