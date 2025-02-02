import event1 from '../assets/images/event1.png'
import D_PRINTING from '../assets/images/workshops/D_PRINTING.webp'
import flutter from '../assets/images/workshops/flutter.webp'
import satellite from '../assets/images/workshops/satellite.webp'
import Bim_modeling from '../assets/images/workshops/Bim_modeling.webp'
import IOT from '../assets/images/workshops/iot.webp'
import PCB from '../assets/images/workshops/pcb_designing.webp'
import PCB_Details from '../assets/images/workshops/pcb_designing_details.webp'
import D_printing_details from '../assets/images/workshops/D_printing_details.webp'
import Bim_modeling_details from '../assets/images/workshops/Bim_modeling_details.webp'
import Flutter_details from '../assets/images/workshops/Flutter_details.webp'
import iot_details from '../assets/images/workshops/iot_details.webp'
import astro_website from '../assets/images/workshops/astro_website.webp'
import astrophotography_details from '../assets/images/workshops/astrophotography_details.webp'
import satellite_details from '../assets/images/workshops/satellite_details.webp'
import autocad_website from '../assets/images/workshops/autocad_website.webp'
import autocad_details from '../assets/images/workshops/autocad_details.webp'
import robotics from '../assets/images/workshops/robotics.webp'
import robotics_details from '../assets/images/workshops/robotics_details.webp'
import robotic_arm from '../assets/images/workshops/robotic_arm.webp'
import robotic_arm_website from '../assets/images/workshops/robotic_arm_website.webp'
import drone from '../assets/images/workshops/drone.webp'
import drone_website from '../assets/images/workshops/drone_website.webp'
import llm_website from '../assets/images/workshops/llm_website.webp'
import llm_details from '../assets/images/workshops/llm_details.webp'
import open_rocket_website from '../assets/images/workshops/open_rocket_website.webp'
import open_rocket_details from '../assets/images/workshops/open_rocket_details.webp'
import uiux_website from '../assets/images/workshops/uiux_website.webp'
import ui_ux_details from '../assets/images/workshops/ui_ux_details.webp'
import game_development_website from '../assets/images/workshops/game_development_website.webp'
import game_development_details from '../assets/images/workshops/game_development_details.webp'
import revit_website from '../assets/images/workshops/revit_website.webp'
import revit from '../assets/images/workshops/revit_details.webp'
import staad_website from '../assets/images/workshops/staad_website.webp'
import staad from '../assets/images/workshops/staad_details.webp'
import solid_website from '../assets/images/workshops/solid_website.webp'
import solid from '../assets/images/workshops/solid _details.webp'

// cultural events
import debate from '../assets/images/cultural/debate.webp'
import mimicry from '../assets/images/cultural/mimicry.webp'
import monoact from '../assets/images/cultural/monoact.webp'
import magic from '../assets/images/cultural/magic.webp'
import kalari from '../assets/images/cultural/kalari.webp'
import anchoring from '../assets/images/cultural/anchoring.webp'
import mehandi from '../assets/images/cultural/mehandi.webp'
import face_painting from '../assets/images/cultural/face_painting.webp'
import spot_photography from '../assets/images/cultural/spot_photography.webp'
import pottery from '../assets/images/cultural/pottery.webp'
import art_exhibition from '../assets/images/cultural/art_exhibition.webp'

// music events

import solo_song from '../assets/images/cultural/musical/solo_song.webp'
import nadanpatt from '../assets/images/cultural/musical/nadanpatt.webp'
import desk_knock from '../assets/images/cultural/musical/desk_knock.webp'
import english_recitation from '../assets/images/cultural/musical/english_recitation.webp'
import guitar from '../assets/images/cultural/musical/guitar.webp'
import light_music from '../assets/images/cultural/musical/light_music.webp'
import malayalam_recitation from '../assets/images/cultural/musical/malayalam_recitation.webp'

// dance 
import dance_workshop  from '../assets/images/cultural/dance/dance_workshop.webp'
import duet_dance from '../assets/images/cultural/dance/duet_dance.webp'
import mime from '../assets/images/cultural/dance/mime.webp'
import oppana from '../assets/images/cultural/dance/oppana.webp'
import retro_dance from '../assets/images/cultural/dance/retro_dance.webp'
import spot_dance from '../assets/images/cultural/dance/spot_dance.webp'
import vistora from '../assets/images/cultural/dance/vistora.webp'
import breaknbeat from '../assets/images/cultural/dance/breaknbeat.webp'

// COMPETITIONS
import wordathon from '../assets/images/competitions/wordathon.jpg'
import bid from '../assets/images/competitions/bid.jpeg'
import geoquest from '../assets/images/competitions/geoquest.jpg'
import buildburst from '../assets/images/competitions/buildBurst.png'
import terralens from '../assets/images/competitions/terra.png'
import sparkduino from '../assets/images/competitions/sparkduino.png'
import bridgeblitz from '../assets/images/competitions/bridge.jpg'
import bitbang from '../assets/images/competitions/bitBang.png'
import pitch from '../assets/images/competitions/pitch.jpeg'
import ideapitch from '../assets/images/competitions/ideaPitch.png'
import logic from '../assets/images/competitions/logic.jpg'
import soldering from '../assets/images/competitions/soldering.jpg'
import dracrys from '../assets/images/competitions/dracarys.jpeg'
import clue from '../assets/images/competitions/clue.jpeg'
import urbanovate from '../assets/images/competitions/urban.jpg'
import geotechnical from '../assets/images/competitions/geotechnical.jpg'
import autoquiz from '../assets/images/competitions/autoquiz.jpg'
import cprogramming from '../assets/images/competitions/cprogramming.jpg'
import gd from '../assets/images/competitions/gd.jpg'
import precision from '../assets/images/competitions/precision.jpg'
import rocket from '../assets/images/competitions/rocket.jpg'


export const competitionData = [
    {
        id: 1002,
        name: "WORDATHON",
        description: "A thrilling vocabulary-building challenge that tests participants' linguistic prowess and creativity. Includes 3 rounds where the preliminary would be based on spell checking, scrambled words and word sudoku. Individual Item.",
        date: "2025-02-06",
        time: "09:00",
        location: "MB301",
        images: [
            wordathon
        ],
        category: "competition",
        fee: "50",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/WORDATHON-812",
        prizePool: "1,500/-"
    },
    {
        id: 1003,
        name: "BID AND FLY",
        description: "An exciting auction-based game where strategy meets adventure, as participants outbid each other to achieve their end goal of flying plane with the bid won components.",
        date: "2025-02-06",
        time: "15:00",
        location: "Open Air Auditorium",
        images: [
            bid
        ],
        category: "competition",
        fee: "159",
        rules: "10 teams\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/BID-and-FLY-814",
        prizePool: "5,000/-"
    },
    {
        id: 1004,
        name: "GEO-QUEST",
        description: "Geotechnical quiz is an individual competition testing knowledge in soil mechanics, foundation design and earthen materials.",
        date: "2025-02-06",
        time: "10:00",
        location: "Civil Seminar Hall (AB05)",
        images: [
            geoquest
        ],
        category: "competition",
        fee: "30",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/GEO-QUEST-QUIZ-816",
        prizePool: null
    },
    {
        id: 1005,
        name: "BUILD'N'BURST",
        description: "BUILT & BURST is a hands-on competition where teams design, mix and cast cubes, followed by testing their strength after 7 days of curing.",
        date: "2025-02-06",
        time: "13:00",
        location: "Material Testing Lab ",
        images: [
            buildburst
        ],
        category: "competition",
        fee: "200",
        rules: "Team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/BUILD-N-BURST-817",
        prizePool: "5,000/-"
    },
    {
        id: 1006,
        name: "TERRALENS",
        description: "Unleash the magic of your lens and unveil the untamed beauty of nature's grand designs! From awe-inspiring geological wonders to the delicate intricacies of soil's unseen structures, capture the perfect fusion of art and geotechnical brilliance. TerraLens invites you to tell the earth's untold stories through your vision—where creativity collides with the raw essence of nature's engineering marvels!",
        date: "2025-02-06",
        time: "09:00",
        location: "Online",
        images: [
            terralens
        ],
        category: "competition",
        fee: "30",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/TERRALENS-833",
        prizePool: null
    },
    {
        id: 1007,
        name: "SPARKDUINO SHOWDOWN",
        description: "Where Innovation Meets Creativity. Step into the world of Arduino and bring your ideas to life! The Sparkduino Showdown is a hands-on prototyping challenge where participants design innovative solutions to real-world problems in domains like Smart Home Automation, Health Care, and Assistive Technology.",
        date: "2025-02-06",
        time: "09:00",
        location: "Digital Electronics Lab (CB11)",
        images: [
            sparkduino
        ],
        category: "competition",
        fee: "349",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/SPARKDUINO-820",
        prizePool: "4,000/-"
    },
    {
        id: 1008,
        name: "BRIDGE BLITZ",
        description: "Bridge making competition with the given requirement and finding the load capacity of the bridge.",
        date: "2025-02-06",
        time: "10:00",
        location: "MB304",
        images: [
            bridgeblitz
        ],
        category: "competition",
        fee: "200",
        rules: "Team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/BRIDGE-BLITZ-821",
        prizePool: "3,000/-"
    },
    {
        id: 1009,
        name: "BIT-BANG (RELAY CODING FOR GIRLS ONLY)",
        description: "Get ready to unleash your inner coding mastermind! This relay competition will put your programming skills to the test, navigating the most complex, innovative, and thrilling coding challenges. Join forces with your team to tackle the bit-bang gauntlet, where strategy, speed, and skill will be pushed to the limit. Are you ready to ignite your code and claim victory? (Registration : 100 per team)",
        date: "2025-02-06",
        time: "13:30",
        location: "Systems Lab (DB02)",
        images: [
            bitbang
        ],
        category: "competition",
        fee: "100",
        rules: "Team participation, Girls only\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/BIT-BANG-(RELAY-CODING-FOR-GIRLS-ONLY)-828",
        prizePool: "3,500/-"
    },
    {
        id: 1010,
        name: "PITCH THE PRODUCT",
        description: "An entrepreneurial showdown where participants present unusual product ideas to captivate the audience and judges with unusual Products.",
        date: "2025-02-07",
        time: "14:00",
        location: "MB223",
        images: [
            pitch
        ],
        category: "competition",
        fee: "50",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/PITCH-THE-PRODUCT-829",
        prizePool: "1,500/-"
    },
    {
        id: 1011,
        name: "IDEA PITCHING",
        description: "Rev up your creativity and take the wheel in the IDEA PITCHING challenge! Here’s your chance to present groundbreaking innovations that could shape the future solving the daily hiccups of the general public. Whether it’s smarter technology, eco-friendly solutions, or futuristic designs, bring your bold ideas to life and pitch them to the world. Get ready to accelerate your imagination and make your mark in the global futuristic revolution!",
        date: "2025-02-07",
        time: "13:00",
        location: "MB222",
        images: [
            ideapitch
        ],
        category: "competition",
        fee: "149",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/IDEA-PITCHING-830",
        prizePool: "5,000/-"
    },
    {
        id: 1012,
        name: "LOGIC EXPLOSION",
        description: "Step into a high-stakes mission to defuse the ultimate logic bomb! Assemble the right connections to achieve your goal, but beware—precision is everything. One wrong move could trigger the explosion—will you conquer the challenge?",
        date: "2025-02-07",
        time: "10:00",
        location: "Digital Electronics Lab (CB11)",
        images: [
            logic
        ],
        category: "competition",
        fee: "200",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/LOGIC-EXPLOSION-831",
        prizePool: "4,000/-"
    },
    {
        id: 1013,
        name: "SOLDERING COMPETITION",
        description: "Test your soldering skills in this hands-on competition.",
        date: "2025-02-07",
        time: "10:00",
        location: "Electronics Workshop (CB05)",
        images: [
            soldering
        ],
        category: "competition",
        fee: "50",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/SOLDERING-COMPETITION-832",
        prizePool: "2,000/-"
    },
    {
        id: 1014,
        name: "PRECISION PATHWAY",
        description: "SURVEYING (THEODOLITE) - Objective – to test participants skills in using a theodolite for surveying and measurement.",
        date: "2025-02-07",
        time: "10:00",
        location: "Survey Lab (AB06)",
        images: [
            precision
        ],
        category: "competition",
        fee: "200 per team",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/PRECISION-PATHWAY-SURVEYING-(-THEODOLITE-)-824",
        prizePool: "2,000/-"
    },
    {
        id: 1015,
        name: "WATER ROCKET COMPETITION",
        description: "Launch into excitement with the Water Rocket Challenge! Feel the rush as you build and launch your own water-powered rocket, defying gravity and soaring high into the sky. It's a thrilling test of creativity, physics, and fun – are you ready to blast off?",
        date: "2025-02-08",
        time: "15:00",
        location: "College Ground",
        images: [
            rocket
        ],
        category: "competition",
        fee: "199",
        rules: "Individual or team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/WATER-ROCKET-COMPETITION-841",
        prizePool: "5,000/-"
    },
    {
        id: 1016,
        name: "GROUP DISCUSSION",
        description: "Get ready to ignite your ideas in the Group Discussion! Share your perspectives, challenge opinions, and collaborate in a dynamic exchange of thoughts. It's the perfect platform to showcase your communication skills, think critically, and engage with diverse viewpoints. Let the conversation flow! (Registration Fee: 99 per person)",
        date: "2025-02-08",
        time: "10:00",
        location: "MB222",
        images: [
            gd
        ],
        category: "competition",
        fee: "99",
        rules: "Group participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/GROUP-DISCUSSION-839",
        prizePool: "3,500/-"
    },
    {
        id: 1017,
        name: "AUTO-QUIZ",
        description: "Rev up your knowledge and get ready for the Auto Quiz Challenge! Test your automotive expertise, race through exciting questions, and see if you have what it takes to be crowned the ultimate car enthusiast. Start your engines—it's time to quiz your way to victory!",
        date: "2025-02-08",
        time: "13:30",
        location: "MB222",
        images: [
            autoquiz
        ],
        category: "competition",
        fee: "49",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/AUTO-QUIZ-837",
        prizePool: "3,000/-"
    },
    // {
    //     id: 1018,
    //     name: "-TECHNICAL QUIZ COMPETITION",
    //     description: "Enter the arena of intellect and persuasion with Geo-Debate! Teams will clash over relevant geotechnical topics, defending their stance with logic, expertise, and passion. It's a battle of ideas where the strongest arguments and sharpest minds will triumph. Will your team take the crown in this riveting clash of geotechnical brilliance?",
    //     date: "2025-02-08",
    //     time: "13:00",
    //     location: "Update soon..",
    //     images: [
    //         "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/geotechnicalquiz1.webp?alt=media&token=example-token",
    //         "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/geotechnicalquiz2.webp?alt=media&token=example-token",
    //         "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/geotechnicalquiz3.webp?alt=media&token=example-token"
    //     ],
    //     category: "event",
    //     fee: "30",
    //     rules: "Individual participation\n",
    //     contacts: [
    //         { name: "Contact1", phone: "1234567890" },
    //         { name: "Contact2", phone: "0987654321" }
    //     ],
    //     registerLink: null,
    //     prizePool: null
    // },
    {
        id: 1019,
        name: "URBANOVATE",
        description: "Create a transformative arena where civil engineering meets innovation! Unleash your ingenuity to craft groundbreaking solutions that shape the cities of tomorrow. It's not just a hackathon, it's your stage to revolutionize the way we build the world!",
        date: "2025-02-08",
        time: "09:00",
        location: "Civil Seminar Hall (AB05)",
        images: [
            urbanovate
        ],
        category: "competition",
        fee: "200",
        rules: "Team participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/URBANOVATE-836",
        prizePool: "4,000/-"
    },
    {
        id: 1020,
        name: "CLUE CRAZE",
        description: "It is a visual brain teaser that uses pictures, symbols, or letters to represent words or phrases, often involving wordplay or phonetics. Solvers interpret the visual clues to deduce the intended meaning. (Registration : 30 per team)",
        date: "2025-02-08",
        time: "10:00",
        location: "Drawing Hall (MB308)",
        images: [
            clue
        ],
        category: "competition",
        fee: "30",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/CLUE-CRAZE-834",
        prizePool: "5,000/-"
    },
    {
        id: 1021,
        name: "DRACARYS 2.0 QUIZ",
        description: "Get ready to unleash your inner Game of Thrones expert! This challenge will put your knowledge to the test, revisiting the most epic, intense, and dramatic moments from the hit series.(Registration : 30 per team)",
        date: "2025-02-08",
        time: "13:00",
        location: "Drawing Hall (MB308)",
        images: [
            dracrys
        ],
        category: "competition",
        fee: "30",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/DRACARYS--2.0-835",
        prizePool: "5,000/-"
    },
    {
        id: 1022,
        name: "C PROGRAMMING CODING CHALLENGE",
        description: "Gear up for the ultimate C Programming Coding Challenge! Test your coding skills, solve tricky problems, and compete with the best in this fast-paced, brain-teasing event. Sharpen your logic, race against the clock, and prove you have what it takes to be a coding champion!",
        date: "2025-02-08",
        time: "13:30",
        location: "Mech CAD Lab (MB019)",
        images: [
            cprogramming
        ],
        category: "competition",
        fee: "199",
        rules: "Individual participation\n",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/C-PROGRAMMING-CODING-COMPETITON-825",
        prizePool: "5,000/-"
    },
    {
        id: 1023,
        name: "GEO-TECHNICAL DEBATE COMPETITION",
        description: "Enter the arena of intellect and persuasion with Geo-Debate! Teams will clash over relevant geotechnical topics, defending their stance with logic, expertise, and passion. It’s a battle of ideas where the strongest arguments and sharpest minds will triumph. Will your team take the crown in this riveting clash of geotechnical brilliance?",
        date: "February 8, 2025",
        time: "1:00 PM - 2:00 PM",
        location: "MB124",
        images: [
            geotechnical
        ],
        category: "competition",
        fee: "30",
        rules: "Each team should contains at least 4 members",
        contacts: [
            { name: "Contact1", phone: "1234567890" },
            { name: "Contact2", phone: "0987654321" }
        ],
        registerLink: "https://tiqr.events/e/GEO-TECHNICAL-DEBATE-COMPETITION-838",
        prizePool: "5,000/-"
    }
]

export const eventData = [
    {
        id: 1000,
        name: "BattleBots Arena",
        description: "The BattleBots Arena invites you to unleash your fiercest creation in a high-stakes robotic showdown. Flip, immobilize, and dominate your way to victory in the ultimate arena battle. Will your bot reign supreme?",
        date: "2025-02-08",
        time: "09:00",
        location: "Tech Grounds",
        images: ["https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/bots1.webp?alt=media&token=626453f1-49cd-493c-b838-80e45f79c462",
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/bots2.webp?alt=media&token=3c9b19c2-9c4c-4028-8e89-514c3ff627f4",
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/bots3.webp?alt=media&token=23d84208-a660-405b-8b39-1a20b323ec69"
        ],
        category: "technical",
        fee: "699",
        rules: "3-6 members\n",
        contacts: [
            { name: "Harikesh", phone: "6238622195" },
            { name: "Swathika", phone: "8113911219" }
        ],
        registerLink: "https://tiqr.events/e/ROBOWAR-759"
    },
    {
        id: 1001,
        name: "ROBOTRACK CHALLENGE",
        description: "Rev up your bot and race through sharp turns, intersections, and curves in this thrilling Line Follower competition.",
        date: "7 feb 2025",
        time: "9 AM - 5 PM",
        location: "Update soon..",
        prizePool: "Trophy + Recognition",
        fee: 499,
        images:[
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/challenge-07.webp?alt=media&token=3ddba1f2-b14a-41d0-b2e7-b53fd462b30a",
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/challenge-08.webp?alt=media&token=04a1422c-eabf-455b-b67d-706634218d11",
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/challenge-09.webp?alt=media&token=74491fb6-2543-4bb7-acd0-29f4fad97674"
        ],
        contacts: [
            { name: "Ajay", phone: "8592936392" },
            { name: "Harikesh", phone: "6238622195" }
        ],
        rules: null,
        category: "technical",
        registerLink: "https://tiqr.events/e/LINE-FOLLOWER-760/"
    },
];

export const workshopData = [
    {
        id: 2001,
        name: "FLUTTER WORKSHOP",
        description: "Join us for an exciting Flutter workshop where you will learn to build stunning mobile apps from scratch. Let's see how developers build apps for multiple platforms using a single codebase.",
        date: "February 7, 2025",
        time: "01:30 PM - 05:00 PM",
        location: "EEE Software Lab (MB213)",
        fee: 300,
        images: [flutter],
        imageDetails: Flutter_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Flutter-Workshop-700",
        contacts: [
            { name: "Abhina", phone: "8129071257" },
            { name: "Anuradh", phone: "9744325402" }
        ]
    },
    {
        id: 2002,
        name: "SATELLITE DATA PLATFORM WORKSHOP",
        description: "Join our Satellite Data Platform Workshop and discover how to harness the potential of satellite data for your research, business, or organization.",
        date: "February 6, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "Systems Lab (DB02 - B Block)",
        fee: 150,
        images: [satellite],
        imageDetails: satellite_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/SATELLITE-DATA-PLATFORM-WORKSHOP-704",
        contacts: [
            { name: "Shwetha K C", phone: "8891912201" },
            { name: "Jeyas C", phone: "8289909017" }
        ]
    },
    {
        id: 2003,
        name: "BIM Workshop",
        description: "This workshop offers comprehensive training in Building Information Modelling (BIM), focusing on advanced techniques to create, analyze, and manage intelligent 3D building models.",
        date: "February 6, 2025",
        time: "9:00 AM - 5:00 PM",
        location: "Civil CAD Lab (MB120)",
        fee: 500,
        images: [Bim_modeling],
        imageDetails: Bim_modeling_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/BIM-Modelling-706",
        contacts: [
            { name: "Abhina", phone: "8129071257" },
            { name: "Anuradh", phone: "9744325402" }
        ],
    },
    {
        id: 2004,
        name: "3D Printing and Designing Workshop",
        description: "Introduces the essentials of 3D printing and design, focusing on crafting detailed prototypes and advanced models using state-of-the-art 3D printing technology.",
        date: "February 7, 2025",
        time: "1:30 PM - 5:00 PM",
        location: "Mech CAD Lab (MB019)",
        fee: 350,
        images: [D_PRINTING],
        imageDetails: D_printing_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/3D-Printing-and-Designing-Workshop-717",
        contacts: [
            { name: "Abhina", phone: "8129071257" },
            { name: "Anuradh", phone: "9744325402" }
          ]
    },
    {
        id: 2005,
        name: "IOT and Embedded Systems Workshop",
        description: "Whether you're a curious beginner or an aspiring innovator, this workshop is your gateway to understanding the basics, mastering the intricacies, and discovering the boundless possibilities of these cutting-edge technologies.",
        date: "February 8, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "High-Tech Classroom (Main Block)",
        fee: 350,
        images: [IOT],
        imageDetails: iot_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/IOT-and-Embedded-Systems-Workshop-710",
        contacts: [
            { name: "Abhina", phone: "8129071257" },
            { name: "Anuradh", phone: "9744325402" }
          ]
    },
    {
        id: 2006,
        name: "PCB Designing Workshop",
        description: "Join our exciting workshop on Printed Circuit Board (PCB) Design and take your electronics engineering skills to the next level! Learn the secrets of designing efficient, high-quality PCBs—an essential skill in today’s tech-driven world where PCB designers are in high demand.",
        date: "February 7, 2025",
        time: "09:00 PM - 01:00 PM",
        location: "ECE Simulation Lab (MB012)",
        fee: 450,
        images: [PCB],
        imageDetails: PCB_Details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/PCB-Designing-Workshop-718",
        contacts: [
            { name: "Abhina", phone: "8129071257" },
            { name: "Anuradh", phone: "9744325402" }
          ]
      
    },
    {
        id: 2007,
        name: "Robotic Arm Workshop",
        description: "Offers creative opportunities to explore the possibilities of programmable, human-like mechanical arms, allowing participants to create innovative products.",
        date: "February 8, 2025",
        time: "9:00 AM - 4:00 PM",
        location: "CCF",
        fee: 499,
        images: [robotic_arm_website],
        imageDetails: robotic_arm,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Robotic-Arm-Workshop-701/",
        contacts: [
            { name: "Swathika", phone: "8113911219" },
            { name: "Ariya", phone: "9061616879" }
        ],
    },
    {
        id: 2008,
        name: "AutoCAD Workshop",
        description: "Embrace your creative product journey with AutoCAD. Learn accurate 2D and 3D drafting, design, and modeling with solids, surfaces, mesh objects, and documentation features.",
        date: "February 6, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Mech CAD Lab (MB019)",
        fee: 499,
        images: [autocad_website],
        imageDetails: autocad_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/AutoCAD-Workshop-703",
        contacts: [
            { name: "Sreelakshmi", phone: "8289856417" },
            { name: "Fidha", phone: "+919539486193" }
          ]
    },
    {
        id: 2009,
        name: "Robotics and IoT Workshop",
        description: "Calling all tech enthusiasts and innovators! Get ready to showcase your skills and creativity in robotics and IoT. Build the future by learning, creating, and innovating with like-minded peers.",
        date: "February 8, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "EEE Software Lab (MB213)",
        fee: 199,
        images: [robotics],
        imageDetails: robotics_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Robotics-and-IOT-Workshop-705",
        contacts: [
            { name: "Aryasree", phone: "8281638809" },
            { name: "Bijil", phone: "8075688613" }
        ],
    },
    {
        id: 2010,
        name: "Drone Workshop",
        description: "Explore the world of drone technology! Learn how to fly and control drones while gaining practical skills in this rapidly evolving field. Perfect for beginners and enthusiasts alike.",
        date: "February 8, 2025",
        time: "10:00 AM - 2:30 PM",
        location: "ECE Workshop (C Block)",
        fee: 499,
        images: [drone_website],
        imageDetails: drone,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Drone-Workshop-707",
        contacts: [
            { name: "Hrithik C K", phone: "7560920240" }
        ],
    },
    {
        id: 2011,
        name: "LLMs and Edge AI Workshop",
        description: "Calling all AI enthusiasts and professionals! We're excited to announce our upcoming workshop on LLM fine-tuning and Edge AI. Take your AI skills to the next level in this rapidly evolving field.",
        date: "February 7, 2025",
        time: "9:00 AM - 4:00 PM",
        location: "Systems Lab (DB02 - B Block)",
        fee: 399,
        images:  [llm_website],
        imageDetails: llm_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/LLM-Fine-Tuning-%26-Edge-AI-Workshop-709",
        contacts: [
            { name: "KP Aatmik", phone: "9447202485" },
            { name: "Urmila T V", phone: "7510932218" }
        ],
    },
    {
        id: 2012,
        name: "Open Rocket Simulator Workshop",
        description: "Master the fundamentals of rocket design and simulation with the Open Rocket Simulator. Learn to create, test, and optimize rocket models virtually, enhancing your engineering and analytical skills.",
        date: "February 7, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "Mech Seminar Hall (MB220)",
        fee: 199,
        images: [open_rocket_website],
        imageDetails: open_rocket_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Open-Rocket-Simulator-Workshop-711",
        contacts: [
            { name: "Adithya P M", phone: "8075109036" },
            { name: "Yadunand", phone: "9895842152" }
          ]
    },
    {
        id: 2013,
        name: "UI/UX Design Workshop",
        description: "Embark on a journey into the world of creativity and innovation with our hands-on UI/UX Design Workshop. Learn key design principles, prototyping techniques, and essential tools to turn your ideas into reality.",
        date: "February 7, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "EEE Software Lab (MB213)",
        fee: "Free",
        images: [uiux_website],
        imageDetails: ui_ux_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/UI-%2F-UX-Workshop-715",
        contacts: [
            { name: "Thejus Prakash", phone: "+91 97460 76651" },
            { name: "Aishwarya Unnikrishnan", phone: "+91 8714774805" }
          ]
    },
    {
        id: 2014,
        name: "Game Development Workshop",
        description: "Turn your passion for gaming into the power of creation. Step into the exciting world of game development to dream, design, code, and build your ideas into reality.",
        date: "February 8, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Mech Seminar Hall (MB220)",
        fee: "Free",
        images: [game_development_website],
        imageDetails: game_development_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Game-Development-Workshop-714",
        contacts: [
            { name: "Thejus Prakash", phone: "+91 97460 76651" },
            { name: "Aishwarya Unnikrishnan", phone: "+91 8714774805" }
          ]
    },
    {
        id: 2015,
        name: "Revit Workshop",
        description: "Take your design and modeling skills to the next level with our Revit Workshop as part of Xplore. Learn to bring your ideas to life using Revit.",
        date: "February 8, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Civil CAD Lab (MB120)",
        fee: 499,
        images: [revit_website],
        imageDetails: revite_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Revit-Workshop-713",
        contacts: [
            { name: "Sreelakshmi", phone: "8289856417" },
            { name: "Ahalya", phone: "8075592101" }
        ],
    },
    {
        id: 2016,
        name: "STAAD Workshop",
        description: "Join us for an immersive STAAD workshop where we’ll explore powerful techniques in structural modeling, analysis, and design.",
        date: "February 7, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Civil CAD Lab (MB120)",
        fee: 499,
        images: [staad_website],
        imageDetails: staad,
        category: "workshop",
        registerLink: "https://tiqr.events/e/STAAD-Workshop-712",
        contacts: [
            { name: "Fidha", phone: "9539486193" },
            { name: "Ahalya", phone: "8075592101" }
        ],
    },
    {
        id: 2017,
        name: "SolidWorks Workshop",
        description: "Whether you’re a beginner or looking to refine your expertise, this hands-on workshop will guide you through the essentials of 3D modeling, assembly design, and product development in SolidWorks.",
        date: "February 7, 2025",
        time: "10:00 AM - 12:00 PM",
        location: "Mech CAD Lab (MB019)",
        fee: 499,
        images: [solid_website],
        imageDetails: solid,
        category: "workshop",
        registerLink: "https://tiqr.events/e/SolidWorks-Workshop-708",
        contacts: [
            { name: "Sayuj SS", phone: "+919400452005" },
            { name: "Alan Rajesh", phone: "+919496259741" }
          ]
    },
    {
        id: 2018,
        name: "Astrophotography",
        description: "Calling all space enthusiasts and photography buffs! Get ready to showcase your astronomical photography skills and capture the beauty of the universe.",
        date: "February 8, 2025",
        time: "10:00 AM - 12:30 PM",
        location: "First Year Block (CA03)",
        fee: 199,
        images: [astro_website],
        imageDetails: astrophotography_details,
        category: "workshop",
        registerLink: "https://tiqr.events/e/Astrophotography-702",
        contacts: [
            { name: "Ishan", phone: "9633169253" },
            { name: "Arjun", phone: "8075474977" }
          ]
    }
];

export const culturalEventData = [
    {
        id: 3001,
        name: "Monoact Competition",
        description: "Unleash your acting brilliance in the Monoact Competition. Step onto the stage and captivate the audience with your expressions, voice, and creativity.",
        date: "6 February 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5 K',
        fee: 100,
        images:[monoact] ,
        contacts: [{name: 'Angel Shoby', phone: '8089091146'}, {name: 'Neha T', phone: '9847799288'}],
        rules: `1. This is a solo event. Open to all college students.\n
                2. The registration fee is 100.\n
                3. No restrictions on the theme. Participants can select their own theme.\n
                4. Maximum time limit is 5 minutes.\n
                5. Obscenity and offensive gestures are strictly prohibited and may result in disqualification.\n
                6. Additional rules may be given by the judges.\n
                7. In case of any dispute, the decision of the event organisers will be final.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Monoact-Competition-723"
    },
    {
        id: 3002,
        name: "Anchoring Competition ",
        description: "Step into the spotlight and showcase your charm, confidence, and spontaneity in the ultimate anchoring challenge! 🎙 Grab the mic, engage the audience, and keep the energy alive with your unique hosting style.",
        date: "7 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee:70, 
        images: [anchoring],
        contacts: [{name: 'Akshay ', phone: '8304017049'}, {name: 'Afra', phone: '6238769860'}],
        rules: `1. Participation is open to all.\n
                2. The Registration fee is 100.\n
                3. Maximum time limit is 10 minutes.\n
                4. You can prefer any language (English or Malayalam) according to your comfort.\n
                5. Topic will be given 10 minutes prior to the competition.\n
                6. Costume and appearance will be considered for judgement.\n
                7. Judges decision will be FINAL.\n
                8. You will be judged according to the given criteria:\n
                \t1. Fluency\n
                \t2. Clarity\n
                \t3. Costume and Appearance\n
                \t4. Body language\n
                \t5. Confidence\n
                \t6. Gestures\n
                \t7. Voice modulation`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Anchoring-Competition-724"
    },
    {
        id: 3003,
        name: "MIMICRY COMPETITION",
        description: "Participate in an evening of wit, humor, and originality as talents impersonate renowned individuals and characters.",
        date: "6 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5k',
        fee:100, 
        images: [mimicry],
        contacts: [{name: 'Haritha ', phone: '9605107278'}, {name: 'Deeshnav ', phone: '8590884990'}],
        rules: `1. Participation is open to all college students.\n
                2. The Registration fee is 100.\n
                3. Each artist shall be given a maximum of 5 minutes.\n
                4. Participants may mimic the sounds of machines, film personalities, or other famous personalities.\n
                5. The medium of expression will be in Malayalam or English.\n
                6. It should necessarily be a cultured and pleasant piece of art.\n
                7. No vulgar or unparliamentary language will be entertained.\n
                8. Marking will be based on:\n
                \t- Imitating skills\n
                \t- Presentation\n
                \t- Variety of sounds and voices imitated\n
                9. Judges' decision will be FINAL and can't be APPEALED.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/MIMICRY-COMPETITION-722"
    },
    {
        id: 3004,
        name: "MAGIC SHOW",
        description: "Join us in the world of magic, mystery and wonder.",
        date: "7th Feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: null,
        fee:'Free', 
        images: [magic],
        contacts: [{name: 'Keerthana P V ', phone: '8590480248'}, {name: 'Hasmina', phone: '98959 85462'}],
        rules: '',
        category: "cultural",
        registerLink: "https://tiqr.events/e/Magic-Show-725"
    },
    {
        id: 3005,
        name: "KALARIPAYATT SHOW",
        description: "Discover the amazing Kalaripayatt—an ancient Indian martial art that originated in Kerala during the 11th–12th century CE.",
        date: "8 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: null,
        fee: null, 
        images: [kalari],
        contacts: [],
        rules: '',
        category: "cultural",
        registerLink: "https://tiqr.events/e/KALARIPAYATT-SHOW-726"
    },
    {
        id: 3006,
        name: "Debate Competition",
        description: "Showcase your wit, eloquence, and critical thinking as you take on compelling topics and challenge the best minds.",
        date: "8 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee: 100, 
        images: [debate],
        contacts: [{name: 'Vismaya', phone: '91884 40511'}, {name: 'Arathi C K', phone: '9048259633'}],
        rules: `1. The event will be conducted as a team consisting of two members.\n
                2. Topic will be given on the spot which will be based on socially relevant issues.\n
                3. Registration fee is 100/- per team.\n
                4. Competition will be held in two stages such as Prelims and Finals.\n
                5. Participants can speak in English or Malayalam as per their convenience.\n
                6. Participants are not allowed to use any devices connected to the Internet during the course of debate.\n
                7. Each team will be allowed to speak for 5-7 minutes.\n
                8. The first and last minutes of a team’s time are protected - the opposition cannot intervene during this period.\n
                9. The decision of the judges are to be respected as they are final and binding.
                `,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Debate-Competition-721"
    },
    {
        id: 3007,
        name: "Mehandi Competition",
        description: "Step into the world of henna artistry and showcase your talent with intricate, mesmerizing designs. Blend tradition with creativity and let your art speak for itself",
        date: "7th February 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '2.5k',
        fee: 100, 
        images: [mehandi],
        contacts: [{name: 'Sandwana', phone: '+91 8113889870'}, {name: 'Afra', phone: '+91 6238 769860'}],
        rules: `1. On-the-spot registrations are permitted.\n
                2. Registration fee is 100.\n
                3. Stickers, pens, and tattoos are not allowed.\n
                4. Participants can apply mehendi on their own hand or someone else's hand.\n
                5. No reference material will be allowed once the competition has begun.\n
                6. Mehendi designs must be created on one hand, extending up to the elbow.\n
                7. The time limit is 60 minutes and will be strictly adhered to.\n
                8. Participants who are late will not be given extra time.\n
                9. This is a single-round event. Designs will be judged based on neatness, creativity, originality, and intricacy.\n
                10. The judge's decision will be final and binding.\n
                11. All required materials will be provided at the venue.

                `,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Mehandi-Competition-729"
    },
    {
        id: 3008,
        name: "FACE PAINTING",
        description: "XPLORE'24 is hosting a face painting competition encouraging participants to enhance their creativity and abilities.",
        date: "6 feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '3k',
        fee: 70, 
        images: [face_painting],
        contacts: [{name: 'Devika', phone: '+91 8848742789'}, {name: 'Afra', phone: '+91 9544918811'}],
        rules: `1. The registration fee is 70.\n
                2. It's a theme-based face painting competition.\n
                3. A team can consist of 2 members.\n
                4. Paints will be provided by the organizers at the time of the event.\n
                5. Brushes have to be brought by the participants.\n
                6. Time duration will be 60 minutes.\n
                7. The theme will be given on the spot.`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Face-Painting-Competition-728"
    },
    {
        id: 3009,
        name: "SPOT PHOTOGRAPHY",
        description: "Get ready for the ultimate photography challenge at Xplore'24! Showcase your creativity, composition, and talent behind the lens.",
        date: "8th feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: '1.5k',
        fee: 50, 
        images: [spot_photography],
        contacts: [{name: 'Drishya ', phone: '+91 7907118594'}, {name: 'Shivani', phone: '+91 9995788316'}],
        rules: `1. Format: Images must be in high-resolution JPEG/PNG format.\n
                2. Editing: State the allowed level of editing (e.g., minor adjustments or no heavy manipulation).\n
                3. Originality: Submissions must be the participant's original work, not plagiarized or previously published.\n
                4. Photos should be taken on 8th February 2024.\n\n

                Judging Criteria -\n
                1. Relevance: Adherence to the competition theme.\n
                2. Creativity: Uniqueness and originality of the photograph.\n
                3. Technical Quality: Focus, exposure, composition, etc.
`,
        category: "cultural",
        registerLink: "https://tiqr.events/e/Spot-Photography-731"
    },
    {
        id: 3010,
        name: "POTTERY WORKSHOP",
        description: "Join us for a POTTERY WORKSHOP  at XPLORE’24!  Experience the joy of working with clay in a fun, hands-on session for all skill levels.",
        date: "6th feb 2025",
        time: "9 AM - 4 PM",
        location: "Update soon..",
        prizePool: null,
        fee: null, 
        images: [pottery],
        contacts: [],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Pottery-Workshop-730"
    },
    {
        id: 3011,
        name: "ART EXHIBITION",
        description: "Join the Celebration and sparkle  with art, inspiration, and connections.Immerse Yourself in Local Artistry Experience an eclectic mix of paintings, sculptures, photography, and more by talented local artists.",
        date: "7 feb 2025",
        time: null ,
        location: "Update soon..",
        prizePool: null,
        fee: null, 
        images: [art_exhibition],
        contacts: [{name: "Sreedeep", phone: "8301942514"}, {name: "Nandana", phone: "954491881"}],
        category: "cultural",
        registerLink: null
    },
    {
        id: 3012,
        name: "NADANPATTU",
        eventName: "POLIKA",
        description: "Step into the enchanting world of Kannur, where tradition meets celebration! As part of Xplore24, our national-level multifest, we invite you to experience the rich cultural tapestry of Kerala namely 'POLIKA' .",
        date: "07/02/2025",
        time: null,
        location: "Main Auditorium",
        prizePool: "10k",
        fee: 150,
        images: [nadanpatt],
        contacts: [
            { name: "Anirudh P", phone: "9072701180" },
            { name: "Punya", phone: "8547928336" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Nadan-Pattu-Competition-739",
        rules: `1. The registration fee is 150 per person.\n
                2. The team can have 7 to 10 members.\n
                3. The duration of the event should not be more than 10 minutes.\n
                4. The song should be unique and traditional.\n
                5. Only traditional musical instruments should be used; no electronic devices are permitted.`
    },
    {
        id: 3013,
        name: "Desk Knock",
        eventName: "Bench Knock: Hit it, own it",
        description: "XPLORE'24 presents Bench Knock: Hit It, Own It where every knock beats with creativity and great moments.",
        date: "07/02/2025",
        time: null,
        location: "Any seminar hall",
        prizePool: "6K",
        fee: 300,
        images: [desk_knock],
        contacts: [
            { name: "Deeshnav K", phone: "+91 8590884990" },
            { name: "Vismaya", phone: "+91 9188440511" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/DESK-KNOCK-736",
        rules: `1. Each team must consist of 3 participants.\n
                2. The registration fee is 300 per team.\n
                3. Teams must create rhythmic beats and patterns by knocking, tapping, or using creative techniques on the desk surface.\n
                4. Only the fingers, palms, wrist, and the area between the wrist and arm can be used for creating sounds.\n
                5. No external objects or tools are allowed.\n
                6. Maximum time limit is 10 minutes.\n
                7. In case of any disputes, the decision of the judges will be final.`
    },
    {
        id: 3015,
        name: "Poem Recitation (English)",
        eventName: null,
        description: "XPLORE'24 Presents ENGLISH POEM RECITATION. A platform to express, inspire and connect with fellow poetry enthusiasts! Recite, Share, Inspire! ",
        date: "07/02/2025",
        time: null,
        location: "Any seminar hall",
        prizePool: "2.5k",
        fee: 100,
        images: [english_recitation],
        contacts: [
            { name: "Angel", phone: "8089091146" },
            { name: "Manu", phone: "9037632234" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/ENGLISH-POEM-RECITATION-735",
        rules: `1. This is a solo event. Participation is open to all college students.\n
                2. The registration fee is 100.\n
                3. Time limit will be 5 minutes.\n
                4. Participants are allowed to recite a poem of their own choice.\n
                5. Participants are not allowed to refer to any notes or printed materials during the recitation.\n
                6. Poems containing languages that are offensive, hurtful to any caste, creed, religion, and community, or wholly inappropriate, will be rejected.\n
                7. The decision of the judges will be final.`
    },
    {
        id: 3016,
        name: "Guitar",
        eventName: null,
        description: "XPLORE’24 presents the ultimate Guitar Competition! Showcase your talent, strum your strings, and captivate the audience with your electrifying performance.",
        date: "07/02/2025",
        time: null,
        location: "Any seminar hall",
        prizePool: "3k",
        fee: 150,
        images: [guitar],
        contacts: [
            { name: "Manu", phone: "9037632234" },
            { name: "Nayantara", phone: "9778756085" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Guitar-Competition-733",
        rules: `1. This is an individual event open to all college students.\n
                2. The registration fee is 150.\n
                3. Maximum time limit is 10 minutes.\n
                4. Any music style or genre is allowed.\n
                5. Participants must bring their own instruments. Instruments will not be provided by the organizers.\n
                6. The judges' decision will be final and cannot be questioned.`
    },
    {
        id: 3017,
        name: "Light Music",
        eventName: null,
        description: "The Light Music Competition at Xplore '24 is where soulful voices, enchanting melodies, captivating rhythms come together to create pure magic!! ",
        date: "8th Feb 2025"        ,
        time: null,
        location: "Seminar hall",
        prizePool: "2.5k",
        fee: 100,
        images: [light_music],
        contacts: [
            { name: "Abhiram", phone: "9188307364" },
            { name: "Drishya", phone: "7907118594" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Light-Music-Competition-738",
        rules: `1. Only non-film songs are allowed.\n
                2. Registration fee is 100.\n
                3. Instruments are not allowed.\n
                4. Karaoke is not allowed.\n
                5. Judgment is based on qualities like Swaram, Sruthilayam, Rhythm, Bhavam, language, and literal clarity.\n
                6. Duration (max): 5 minutes.`
    },
    {
        id: 3018,
        name: "Solo Song (Karaoke)",
        eventName: null,
        description: "Get ready for an unforgettable musical journey with the Solo Song Performance at XPLORE'24!",
        date: "08/02/2025",
        time: null,
        location: "Any seminar hall",
        prizePool: "3k",
        fee: 100,
        images: [solo_song],
        contacts: [
            { name: "Nayanthara M K", phone: "+91 9778756085" },
            { name: "Adwaith", phone: "+91 9895703163" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Solo-Song-Competition-734",
        rules: `1. Duration of the event will be around 6 to 7 minutes.\n
                2. Only Malayalam songs are allowed.\n
                3. Fast beat songs/rap songs are not considered.\n
                4. Live voice only, no pre-recorded voice allowed.\n
                5. Participants must submit their soundtrack in MP3 format prior to the event.`
    },
    {
        id: 3019,
        name: "Poem Recitation (Malayalam)",
        eventName: "കവിതാരവം",
        description: "XPLORE'24 announces MALAYALAM POEM RECITATION COMPETITION.Join us to celebrate the Beauty of Words and the Power of Poetry.Showcase your poem recitation skills to us.",
        date: "08/02/2025",
        time: null,
        location: "Any seminar hall",
        prizePool: "2.5k",
        fee: 100,
        images: [malayalam_recitation],
        contacts: [
            { name: "Punya", phone: "8547928336" },
            { name: "Abhiram", phone: "9188307364" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/MALAYALAM-POEM-RECITATION-737",
        rules: `1. Duration of the event is 5 minutes.\n
                2. Registration fee is 100.\n
                3. Participants must start their recitation by saying the title of the poem and poet's name.\n
                4. Participants may recite poetry written by a poet of their choice.\n
                5. Participants are not allowed to refer to any notes or printed materials during the recitation.\n
                6. Poems containing language that are offensive, hurtful to any caste, creed, religion, and community, or wholly inappropriate, will be rejected.\n
                7. The decision of judges will be final.`
    },
    {
        id: 3020,
        name: "Fashion Show",
        eventName: "VISTORA",
        tagline: "The Fashion Gala",
        description: "XPLORE'24 presents VISTORA, The Ultimate Fashion Gala.Join us for an unforgettable evening of fashion, beauty and entertainment at our upcoming fashion show",
        date: "6/02/2025",
        time: null,
        location: "Main stage",
        prizePool: "50k",
        fee: 200,
        images: [vistora],
        contacts: [
            { name: "Arathi", phone: "7591929645" },
            { name: "Samath", phone: "7306132850" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Fashion-Parade-740",
        rules: `1. Open theme.\n
                2. A minimum of 6 and a maximum of 15 models per team are allowed.\n
                3. Registration fee is 200 per head.\n
                4. Background music and background video (if any) should be given prior to the event.\n
                5. One participant cannot be part of two participating teams.\n
                6. Time limit per team: 10 minutes empty to empty. An additional 1 minute, if required, will be provided for narration only.\n
                7. Exceeding the time limit will lead to disqualification.\n
                8. Explicit conveying of theme is prohibited.\n
                9. Only registered members get certificates.\n
                10. Makeup is not provided.\n
                11. Indecent gestures and behaviour are not entertained and will lead to the disqualification of the team.`
    },
    {
        id: 3021,
        name: "Dance Competition",
        eventName: "Break n Beat",
        tagline: "",
        description: "XPLORE'24 invites you to the ultimate dance competition. Step up, showcase your talent, and let your moves speak louder than words!",
        date: "6/02/2025",
        time: null,
        location: "Main stage",
        prizePool: "25k",
        fee: 200,
        images: [dance_workshop],
        contacts: [
            { name: "Shivani", phone: "9995788316" },
            { name: "Muhsina", phone: "9495347917" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Dance-Competition-742",
        rules: `1. Each team should comprise a minimum of 6 members.\n
                2. Open to all above 16 years.\n
                3. The time limit of each performance is 20 minutes (including stage setting). Negative marking for exceeding the time limit.\n
                4. Choice of song is open to participants.\n
                5. The participants are requested to bring their form in MP3 format.\n
                6. No properties will be provided by the coordinators. Participants can carry their own props.\n
                7. Dance performance should not convey any indecent gestures.\n
                8. Green room would be given for changing purposes.\n
                9. The participants will be judged on the basis of their rhythm, formation, synchronization, expression, costume, makeup, setup, and overall effects.\n
                10. Decision of the judges will be final and binding.\n
                11. Soundtrack should be handed over 30 mins prior to the event.\n
                12. Fire, water, heavy objects, and indecent behavior or dressing can lead to disqualification.`
    },
    {
        id: 3022,
        name: "MIME",
        eventName: "",
        tagline: "",
        description: "Join us for the MIME COMPETITION at XPLORE’24! Where participants will showcase their storytelling through silent, yet powerful performances.",
        date: "06/02/2025",
        time: null,
        location: "Main auditorium",
        prizePool: "9k",
        fee: 1000,
        images: [mime],
        contacts: [
            { name: "Abhay", phone: "6282288256" },
            { name: "Haritha", phone: "9605107278" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/MIME-Competition-744",
        rules: `1. A team may consist of a minimum of 5 and maximum of 10 members (including pianist).\n
                2. The registration fee is 1000 per team.\n
                3. One member cannot be part of more than one participating team.\n
                4. Time limit is 5 to 15 minutes including stage setting.\n
                5. General rules of mime will be followed.\n
                6. Use of instruments in the background is permitted.\n
                7. Recordings are also allowed (to be submitted in MP3 or audio format) prior to the event.\n
                8. Weightage will be given to theme and costume.\n
                9. Judgement will be based on:\n
                   - Energy\n
                   - Theme\n
                   - Synchronization\n
                   - Definition and clarity\n
                   - Expressions\n
                   - Formations`
    },
    {
        id: 3023,
        name: "Oppana",
        eventName: "",
        tagline: "",
        description: "Xplore '24 Presents: Oppana Showdow. Step into the spotlight and showcase your rhythm and energy in the ultimate Oppana challenge! With vibrant moves and powerful beats, this is your moment to shine",
        date: "07/02/2025",
        fdate: "7th February 2025",
        time: null,
        location: "Main auditorium",
        prizePool: "15k",
        fee: "100",
        images: [oppana],
        contacts: [
            { name: "Arathi", phone: "9048259633" },
            { name: "Samath", phone: "7306132850" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Oppana-Showdown-745",
        rules: `1. The maximum number of participants is 12, including up to 3 external singers.\n
                2. A registration fee of ₹100 per participant is required.\n
                3. Recorded songs are not permitted for the performance.\n
                4. The participating team is responsible for setting up and removing all props and sets immediately after their performance.\n
                5. The time limit for stage setup is 3 minutes, and the performance time limit is 10 minutes.\n
                6. Judgment will be based on rhythm, formation, expression, costumes, makeup, coordination, and overall effects.\n
                7. For further guidelines, please contact the event coordinators.`
    },
    {
        id: 3024,
        name: "Retro Dance",
        eventName: "Retrobeat",
        tagline: "",
        description: "Get ready to flashback to the funky era! Announcing the Retro Dance competition at Xplore'24! Showcase your best retro moves and compete for exciting prizes!",
        date: "08/02/2025",
        fdate: "8th February 2025",
        time: null,
        location: "Main auditorium",
        prizePool: "15k",
        fee: "150",
        images: [retro_dance],
        contacts: [
            { name: "Neha", phone: "9847799288" },
            { name: "Shivani", phone: "9995788316" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Retro-Dance-743",
        rules: `1. Each team should comprise of a minimum of 6 members.\n
                2. Registration fee is 150 per member.\n
                3. Time limit is 20 minutes for each performance (including stage setting). Negative marking will be given for exceeding the time limit.\n
                4. Choice of songs is open to the participants, but the song should be selected from the range between 1980 to 2010. If the song selected is out of this range, the team will be disqualified.\n
                5. The participants are requested to bring their soundtrack in MP3 format and it should be submitted prior to the event to the coordinators.\n
                6. The participants will be judged on the basis of their rhythm, formation, synchronization, expressions, costumes, makeup, and overall effects.\n
                7. No properties will be provided by coordinators. Participants should bring their own properties.\n
                8. Decision of the judges will be final.\n
                9. The coordinators are not responsible for any issues related to USB/CO.`
    },
    {
        id: 3025,
        name: "Spot Choreography",
        eventName: "Sync or Swim",
        tagline: "",
        description: "We are thrilled to announce the Spot Choreography performance at Xplore'24! This is a unique opportunity for dancers and choreographers to showcase their talent, creativity, and skills.",
        date: "08/02/2025",
        fdate: "8th February 2025",
        time: null,
        location: "Open Air Auditorium",
        prizePool: "3k",
        fee: "150",
        images: [spot_dance],
        contacts: [
            { name: "Shivani", phone: "9995788316" },
            { name: "Nandana", phone: "9544918811" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Spot-Choreography-741",
        rules: `1. The event is open to all.\n
                2. The registration fee is 150.\n
                3. Classical dance is not permitted.\n
                4. The maximum time allotted is 3 minutes. Three songs will be played (1 minute for each song).\n
                5. The performance will be evaluated based on choreography, presentation, rhythm, and expression.\n
                6. The decision of judges and coordinators will be final and binding.\n
                7. Fire, water, heavy objects, and indecent behavior can lead to disqualification.`
    },
    {
        id: 3026,
        name: "Duet Dance Competition",
        eventName: "Twist & Turn",
        tagline: "Time to twist, time to turn!",
        description: "XPLORE'24 presents Twist & Turn, where every move flows and every spin sparks creativity.",
        date: "06/02/2025",
        fdate: "7th February 2025",
        time: null,
        location: "Main Auditorium",
        prizePool: "5k",
        fee: "200",
        images: [duet_dance],
        contacts: [
            { name: "Vismaya", phone: "9188440511" },
            { name: "Nayanthara", phone: "9778756085" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/DUET-DANCE-COMPETITION-746",
        rules: `1. Open only to students of our college.\n
                2. Registration fee is 200 per team.\n
                3. Team size: 2 participants (any gender combination).\n
                4. Any dance style is allowed.\n
                5. Performance limit: 5 minutes.\n
                6. Submit MP3 soundtrack via pen drive to the Stage/Sound coordinator prior to the event.\n
                7. Hazardous items (fire, water, colors, oil, etc.) are banned.\n
                8. Props are allowed if they are safe and non-damaging.\n
                9. Judging criteria include creativity, synchronization, expressions, and overall impact.\n
                10. Advance registration is mandatory, no last-minute entries.`
    },
    
    
    
];

export const preEventData = [
    {
        id: 3027,
        name: "Dance Workshop",
        eventName: null,
        tagline: null,
        description: "Unleash your moves and dive into the rhythm with Sarangi Shyam at our open style dance workshop, as a part of Xplore'24! Get ready to break free, express yourself, and dance like never before.",
        date: "02/02/2025",
        fdate: "2nd February 2025",
        time: null,
        location: "Will update through WhatsApp group",
        prizePool: null,
        fee: "150",
        images: ["https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/dance_workshop.webp?alt=media&token=bd4ef6c1-bb1c-47c8-90db-ce1ed88c91c1"],
        contacts: [
            { name: "Shivani", phone: "+91 99957 88316" }
        ],
        category: "cultural",
        registerLink: "https://tiqr.events/e/Dance-Workshop-747",
        rules: null
    }   
  ];



  export const generalEventsData = [
    {
        id: 4001,
        name: "Galactic Quest",
        description: "Embark on an interstellar adventure! Step into a cosmic realm where teams of 3 must solve mind-bending puzzles, decode mysterious signals, and uncover hidden secrets to save Earth from impending doom. Experience the thrill of teamwork, strategy, and discovery in this unforgettable space-themed challenge. (SPOT REGISTRATION AVAILABLE AT THE VENUE)",
        date: "2025-02-06",
        time: "10:00 - 16:00",
        location: "First Year Block (CA04)",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/galacticq.jpeg?alt=media&token=b85bf5ab-792f-4a31-9a94-198fb847a6b2"
        ],        fee: "50",
        registerLink: "https://tiqr.events/e/Galactic-Quest-864",
        contacts: [{ name: "Arjun", phone: "8075474977" }]
    },
    {
        id: 4002,
        name: "Geo-Connect Pictionary",
        description: "Get ready to sketch, guess, and laugh your way through the ultimate geotechnical showdown! Geo-Pictionary combines the thrill of creativity with the science of the earth. From simple soils to complex foundations, watch teams bring geotechnical concepts to life through artistic strokes and wild guesses.",
        date: "2025-02-07",
        time: "13:00 - 14:00",
        location: "MB124",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.46.45%20AM.jpeg?alt=media&token=8d54351a-d4c4-47a2-9cf2-3aede33d3c12"
        ],        fee: "Free",
        registerLink: "https://tiqr.events/e/Geo-Connect-Pictionary-862",
        contacts: [{ name: "Huda", phone: "9995480079" }]
    },
    {
        id: 4003,
        name: "Project Expo",
        description: "We invite students, researchers, and innovators to submit their innovative projects for the National Level Tech Fest, Xplore '24 Project Expo. This expo will showcase projects from various categories, including AI, IoT, Robotics, Cybersecurity, Hardware Innovations, and more.",
        date: "TBD",
        time: "TBD",
        location: "Main Block",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/projectExpo.png?alt=media&token=cc94ac4b-0944-42cb-8605-d8085e3f5d7a"
        ],        fee: "TBD",
        registerLink: "https://forms.gle/epJCZUewXEu4aQteA",
        contacts: [
            { name: "Niranjana Madhusoodhanan", phone: "9447480736" },
            { name: "Aishwarya Unnikrishnan", phone: "8714774805" }
        ]
    },
    {
        id: 4004,
        name: "Panel Discussion",
        description: "Space Connect: 'Students Round Table for Space' brings together student leaders from Kerala’s active space communities and representatives of UL Space Club, a registered ISRO space tutor. This panel will explore opportunities and challenges in the space sector, fostering collaboration among student groups, institutions, and mentors to strengthen Kerala's space ecosystem.",
        date: "2025-02-06",
        time: "13:30 - 16:00",
        location: "ECE Seminar Hall (CB16)",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.38.56%20AM%20(1).jpeg?alt=media&token=1e3cb1ba-92cb-4f31-9fe7-35fbe1d06d92"
        ],
        fee: "Free",
        registerLink: "https://tiqr.events/e/Panel-Discussion-867",
        contacts: [{ name: "Adhithya P M", phone: "8075109036" }]
    },
    {
        id: 4005,
        name: "XPLORE ARENA",
        description: "Unleash your competitive spirit and dive into a challenge like no other! Xplore Arena is here to test your wits, strategy, and teamwork in the most exciting way. Get ready to engage in thrilling games, conquer challenges, and create unforgettable moments! Whether you’re in it to win or just for fun, this is your chance to shine.",
        date: "2025-02-08",
        time: "13:00 - 15:00",
        location: "CSE Seminar Hall (DB02)",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.38.56%20AM.jpeg?alt=media&token=2c9134a9-2982-400d-8a0f-ca0c0b25be72"
        ],        
        fee: "10",
        registerLink: "https://tiqr.events/e/XPLORE-ARENA-866",
        contacts: [
            { name: "Amaya", phone: "8606739447" },
            { name: "Abhaya", phone: "8281257674" }
        ]
    },
    {
        id: 4006,
        name: "Future Ignite",
        description: "Get ready to unleash your creativity and innovation! This idea-pitching competition for 9th to 12th-grade students will challenge you to think big and present bold ideas. With two thrilling rounds—group discussions and presentations—this event will spark your potential and celebrate your brilliance with exciting prizes.",
        date: "2025-02-07",
        time: "09:30 - 12:30",
        location: "MB224",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/WhatsApp%20Image%202025-02-01%20at%2011.40.38%20AM.jpeg?alt=media&token=348f5081-94c7-447d-825e-cbbf3fe2e1d8"
        ],        
        fee: "50",
        registerLink: "https://tiqr.events/e/Future-Ignite-865",
        contacts: [
            { name: "Dhanupriya K", phone: "8139058681" },
            { name: "Mareena Jolly", phone: "7510384177" }
        ]
    },
    {
        id: 4007,
        name: "MINESWEEPER CHALLENGE",
        description: "Think you’ve got what it takes to master the battlefield of logic? Dive into the Minesweeper Challenge, where every move matters. Choose your level, race against the clock, and uncover the path to victory while dodging virtual mines. Are you ready to sweep the competition? (SPOT REGISTRATION AVAILABLE AT THE VENUE)",
        date: "2025-02-07",
        time: "TBD",
        location: "Main Block",
        category: "general-event",
        images: [
            "https://firebasestorage.googleapis.com/v0/b/image-uploader-842b5.appspot.com/o/9cb368bd-41ef-493b-b0d6-9b56dad171fc.jpeg?alt=media&token=6bd66b2e-0600-484f-9a71-e66fa96913f4"
        ],        
        fee: "TBD",
        registerLink: "https://tiqr.events/e/MINESWEEPER-CHALLENGE-863",
        contacts: [
            { name: "Govind K A", phone: "7736802194" },
            { name: "Abhiram C", phone: "9446648723" }
        ]
    }
];



  
