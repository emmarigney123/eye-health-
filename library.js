// ==========================================================
// EYE HEALTH LIBRARY v0.1
// ==========================================================
//
// This first build includes:
// - 12 browse categories
// - Live keyword/symptom search
// - Category pages
// - Reusable condition article template
// - Simple / Detailed views
// - Related-condition navigation
// - 5 fully written starter articles
//
// Condition URLs can be linked directly using:
// library.html?condition=dry-eye
//
// ==========================================================


const categories = [

    {
        id: "vision-prescription",
        name: "Vision & Prescription",
        description:
            "Blurry vision, nearsightedness, farsightedness, astigmatism, focusing, and eye-alignment problems."
    },

    {
        id: "dry-eye-cornea",
        name: "Dry Eye & Cornea",
        description:
            "Dry eye, corneal injuries and infections, keratoconus, corneal dystrophies, and related surface conditions."
    },

    {
        id: "eyelids-tears",
        name: "Eyelids, Lashes & Tears",
        description:
            "Styes, chalazia, blepharitis, eyelid-position problems, and tear-drainage disorders."
    },

    {
        id: "conjunctiva-red-eye",
        name: "Conjunctiva & Red Eye",
        description:
            "Allergic, viral, bacterial, irritative, and other causes of redness involving the eye surface."
    },

    {
        id: "lens-cataracts",
        name: "Lens & Cataracts",
        description:
            "Cataracts, lens changes, and conditions related to previous cataract surgery."
    },

    {
        id: "retina-macula",
        name: "Retina & Macula",
        description:
            "Retinal tears and detachments, macular disorders, diabetic retinal disease, and retinal blood-vessel conditions."
    },

    {
        id: "glaucoma-pressure",
        name: "Glaucoma & Eye Pressure",
        description:
            "Open-angle glaucoma, angle closure, ocular hypertension, and conditions involving the eye's pressure system."
    },

    {
        id: "optic-nerve",
        name: "Optic Nerve",
        description:
            "Optic neuritis, optic neuropathies, optic-disc abnormalities, and other conditions involving the visual nerve."
    },

    {
        id: "inflammation",
        name: "Inflammation",
        description:
            "Uveitis, scleritis, episcleritis, and other inflammatory eye conditions."
    },

    {
        id: "neurologic-vision",
        name: "Neurologic Vision & Eye Movement",
        description:
            "Migraine aura, double-vision disorders, eye-movement problems, and neurologic visual-field changes."
    },

    {
        id: "injury-exposure",
        name: "Injury & Exposure",
        description:
            "Eye injuries, foreign material, chemical exposures, UV injury, and other trauma-related conditions."
    },

    {
        id: "genetic-inherited",
        name: "Genetic & Inherited Eye Conditions",
        description:
            "Inherited retinal diseases, congenital eye disorders, and genetic conditions that can affect vision."
    }
];


// ==========================================================
// CONDITION DATA
// ==========================================================

const conditions = [

    // ======================================================
    // DRY EYE
    // ======================================================

    {
        id: "dry-eye",
        name: "Dry Eye Disease",
        category: "dry-eye-cornea",
        frequency: "Common",
        careTag: "Usually non-emergency",

        aliases: [
            "dry eyes",
            "scratchy eye",
            "gritty",
            "burning eye",
            "stinging",
            "watery eyes",
            "tear film",
            "blurry after screens",
            "blur improves blinking",
            "artificial tears",
            "eye feels dry"
        ],

        intro:
            "Dry eye happens when the tear film does not keep the surface of the eye comfortably and consistently lubricated.",

        overview: [
            "Dry eye develops when the eyes do not make enough tears, when tears evaporate too quickly, or when the tears do not work well enough to keep the eye surface stable.",
            "It can cause discomfort as well as fluctuating vision. Symptoms may change during the day and can become more noticeable with screen use, wind, dry environments, or contact-lens wear."
        ],

        overviewDetailed: `
            <h3>The tear film</h3>
            <p>
                The front of the eye is covered by a thin tear film. Tears
                help maintain a smooth optical surface, reduce friction, and
                protect the cornea and conjunctiva. Dry-eye disease can develop
                when tear quantity, tear stability, or the balance of tear-film
                components is disrupted.
            </p>

            <h3>Why vision can fluctuate</h3>
            <p>
                A smooth tear film helps light enter the eye evenly. When the
                tear film breaks up between blinks, vision may temporarily
                become less clear and then sharpen again after blinking.
            </p>
        `,

        symptoms: [
            "Burning or stinging",
            "Dry, scratchy, or gritty feeling",
            "Blurry or fluctuating vision",
            "Redness",
            "Light sensitivity",
            "Contact-lens discomfort",
            "Watery eyes",
            "Eye fatigue"
        ],

        symptomsDetailed: `
            <h3>Why can dry eyes water?</h3>
            <p>
                Dryness and surface irritation can trigger reflex tearing.
                These extra tears may overflow from the eye even though the
                normal tear film is not staying stable enough to keep the
                surface comfortable.
            </p>
        `,

        causes: [
            {
                title: "Not enough tears",
                text:
                    "The tear-producing glands may not make enough fluid to keep the eye surface comfortably wet."
            },
            {
                title: "Tears evaporate too quickly",
                text:
                    "Blinking patterns, eyelid oil-gland function, environment, and other factors can allow tears to evaporate faster."
            },
            {
                title: "Tears do not remain stable",
                text:
                    "The different components of the tear film may not work together well enough to create a smooth, lasting surface."
            }
        ],

        riskFactors: [
            "Increasing age",
            "Contact-lens wear",
            "Long periods of screen use",
            "Wind, smoke, or dry air",
            "Some autoimmune conditions, including Sjögren syndrome or lupus",
            "Some medicines and eyelid conditions"
        ],

        causesDetailed: `
            <h3>Dry eye is not one single problem</h3>
            <p>
                An eye-care professional may look for reduced tear production,
                faster tear evaporation, eyelid or meibomian-gland problems,
                exposure of the ocular surface, medication effects, or an
                associated systemic condition. More than one factor can be
                present at the same time.
            </p>
        `,

        diagnosis:
            "Dry eye is diagnosed through symptoms together with an eye examination. An eye-care professional may look at the tear film, cornea, conjunctiva, eyelids, and how quickly tears remain stable after blinking.",

        exams: [
            {
                title: "Slit-lamp examination",
                text:
                    "A microscope and focused light allow the doctor to examine the cornea, conjunctiva, eyelids, and tear film."
            },
            {
                title: "Tear-film testing",
                text:
                    "Tests may evaluate how many tears the eyes produce or how long the tear film remains stable."
            },
            {
                title: "Eyelid evaluation",
                text:
                    "The eyelid margins and oil glands may be checked because they can affect tear evaporation."
            }
        ],

        diagnosisDetailed: `
            <h3>Possible tear tests</h3>
            <p>
                Depending on the situation, testing may include tear
                break-up time, staining of the eye surface, or measurement
                of tear production. Not every person needs every test.
            </p>
        `,

        treatmentIntro:
            "Treatment depends on what is contributing to the dry eye and how much it affects comfort or vision.",

        treatments: [
            {
                title: "Lubrication",
                text:
                    "Artificial tears and other lubricating products may be used for some forms of dry eye."
            },
            {
                title: "Environmental and habit changes",
                text:
                    "Reducing exposure to wind or smoke, taking screen breaks, and addressing environmental dryness may help some people."
            },
            {
                title: "Prescription treatment",
                text:
                    "Prescription eye medicines may be considered when inflammation or tear production needs additional treatment."
            },
            {
                title: "Treating contributing eyelid problems",
                text:
                    "Meibomian-gland or eyelid conditions may need their own management."
            }
        ],

        treatmentDetailed: `
            <h3>Other treatments</h3>
            <p>
                Depending on the cause and severity, an eye-care professional
                may discuss punctal plugs, prescription anti-inflammatory
                drops, or office-based treatment for eyelid and meibomian-gland
                dysfunction.
            </p>
        `,

        seekCareHeading: "Most dry-eye symptoms are not an emergency.",
        seekCare:
            "Significant eye pain, a sudden major change in vision, recent injury, or a very painful red eye may point to something other than uncomplicated dry eye and should be evaluated promptly.",

        urgent: false,

        related: [
            "optic-neuritis",
            "glaucoma"
        ],

        sources: [
            {
                name: "National Eye Institute — Dry Eye",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/dry-eye"
            },
            {
                name: "National Eye Institute — Testing for Dry Eye",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/dry-eye/testing-dry-eye"
            }
        ]
    },


    // ======================================================
    // CATARACT
    // ======================================================

    {
        id: "cataract",
        name: "Cataract",
        category: "lens-cataracts",
        frequency: "Very common with age",
        careTag: "Usually gradual",

        aliases: [
            "cloudy lens",
            "cloudy vision",
            "hazy vision",
            "faded colors",
            "night driving",
            "halos",
            "glare",
            "headlights too bright",
            "lens clouding"
        ],

        intro:
            "A cataract is a cloudy area that develops in the normally clear lens inside the eye.",

        overview: [
            "The lens sits behind the colored part of the eye and helps focus light. A cataract forms when part of that lens becomes cloudy.",
            "Cataracts often develop slowly. Early cataracts may cause no noticeable symptoms, while larger cataracts can make vision cloudy, faded, glare-sensitive, or difficult at night."
        ],

        overviewDetailed: `
            <h3>The lens and vision</h3>
            <p>
                The natural lens changes shape to help focus light. When lens
                proteins and fibers change over time, areas of the lens can
                become less transparent. Cataracts may affect one or both eyes,
                and the severity can be different between the eyes.
            </p>
        `,

        symptoms: [
            "Cloudy or blurry vision",
            "Colors seem faded",
            "Difficulty seeing at night",
            "Glare from headlights or sunlight",
            "Halos around lights",
            "Frequent prescription changes",
            "Sometimes double vision in one eye"
        ],

        symptomsDetailed: `
            <h3>Symptoms usually change gradually</h3>
            <p>
                A dramatic vision change over minutes or hours is not the
                typical pattern of an ordinary age-related cataract and deserves
                evaluation for other causes.
            </p>
        `,

        causes: [
            {
                title: "Age-related lens change",
                text:
                    "Most cataracts develop because of normal changes in the lens that become more common with age."
            },
            {
                title: "Other eye or health factors",
                text:
                    "Eye injury, previous eye surgery, diabetes, radiation exposure, and some medicines can increase risk."
            }
        ],

        riskFactors: [
            "Increasing age",
            "Diabetes",
            "Eye injury or previous eye surgery",
            "Steroid medication exposure",
            "Smoking",
            "Long-term sun exposure",
            "Family history"
        ],

        causesDetailed: `
            <h3>Different types of cataract</h3>
            <p>
                Cataracts can form in different parts of the lens. Their
                location can influence which symptoms are most noticeable,
                but an examination is needed to determine the type.
            </p>
        `,

        diagnosis:
            "An eye doctor can identify a cataract during a comprehensive eye examination, usually including a dilated examination of the lens and the rest of the eye.",

        exams: [
            {
                title: "Vision testing",
                text:
                    "Visual acuity and refraction help determine how much the vision can be improved with optical correction."
            },
            {
                title: "Slit-lamp examination",
                text:
                    "A microscope allows the doctor to examine the lens and identify clouding."
            },
            {
                title: "Dilated examination",
                text:
                    "Dilation allows the doctor to check the lens and also examine the retina and optic nerve."
            }
        ],

        diagnosisDetailed: `
            <h3>Symptoms are not enough</h3>
            <p>
                Glare, halos, blur, and difficulty at night can also occur with
                refractive, corneal, retinal, or other eye conditions. Seeing
                the lens directly is what establishes whether a cataract is
                present.
            </p>
        `,

        treatmentIntro:
            "Treatment depends on how much the cataract affects daily life.",

        treatments: [
            {
                title: "Updated vision correction",
                text:
                    "Earlier cataract-related blur may sometimes improve with a new glasses or contact-lens prescription."
            },
            {
                title: "Lighting and visual adjustments",
                text:
                    "Brighter lighting or strategies that reduce glare may help with earlier symptoms."
            },
            {
                title: "Cataract surgery",
                text:
                    "When the cataract interferes enough with everyday activities, surgery can remove the cloudy natural lens and replace it with an artificial lens."
            }
        ],

        treatmentDetailed: `
            <h3>When is surgery considered?</h3>
            <p>
                Cataract surgery is generally considered when the cataract
                meaningfully interferes with activities such as reading,
                driving, work, or other daily tasks. The decision is based on
                the person's needs and examination findings, not simply the
                presence of a cataract.
            </p>
        `,

        seekCareHeading: "Cataracts usually change vision gradually.",
        seekCare:
            "A sudden major decrease in vision, new flashes or many floaters, a new shadow in vision, or substantial eye pain is not a typical simple cataract pattern and should be evaluated promptly.",

        urgent: false,

        related: [
            "glaucoma",
            "retinal-detachment"
        ],

        sources: [
            {
                name: "National Eye Institute — Cataracts",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
            }
        ]
    },


    // ======================================================
    // RETINAL DETACHMENT
    // ======================================================

    {
        id: "retinal-detachment",
        name: "Retinal Detachment",
        category: "retina-macula",
        frequency: "Uncommon",
        careTag: "Medical emergency",

        aliases: [
            "retina detached",
            "curtain vision",
            "shadow vision",
            "new floaters",
            "flashes",
            "lots of floaters",
            "side vision missing",
            "retinal tear",
            "retina"
        ],

        intro:
            "Retinal detachment happens when the retina is pulled away from its normal position at the back of the eye.",

        overview: [
            "The retina is the light-sensitive tissue lining the inside back wall of the eye. It converts light into signals that travel through the optic nerve to the brain.",
            "A detached retina cannot function normally in the affected area. Symptoms often appear suddenly, and prompt treatment is important to protect vision."
        ],

        overviewDetailed: `
            <h3>How can a detachment begin?</h3>
            <p>
                One common mechanism begins with a retinal tear that allows
                fluid to pass underneath the retina. Other types of retinal
                detachment can develop from pulling forces on the retina or
                fluid collecting beneath it without a retinal tear.
            </p>
        `,

        symptoms: [
            "Sudden increase in floaters",
            "Flashes of light",
            "Dark shadow or curtain in vision",
            "Missing side or central vision",
            "Sudden reduction in clarity"
        ],

        symptomsDetailed: `
            <h3>Floaters alone do not mean retinal detachment</h3>
            <p>
                Floaters are common and frequently come from ordinary vitreous
                changes. The combination of a sudden increase in floaters,
                flashes, or a new shadow/curtain is more concerning and needs
                direct retinal examination.
            </p>
        `,

        causes: [
            {
                title: "Retinal tear",
                text:
                    "A break in the retina can allow fluid to move underneath it and separate it from the wall of the eye."
            },
            {
                title: "Traction",
                text:
                    "Scar tissue or other pulling forces can sometimes lift the retina from its normal position."
            },
            {
                title: "Fluid beneath the retina",
                text:
                    "Some inflammatory or vascular problems can lead to fluid collecting underneath the retina."
            }
        ],

        riskFactors: [
            "Previous retinal detachment or retinal tear",
            "Family history of retinal detachment",
            "Serious eye injury",
            "Previous eye surgery such as cataract surgery",
            "Some retinal conditions and high degrees of nearsightedness"
        ],

        causesDetailed: `
            <h3>Vitreous changes</h3>
            <p>
                The vitreous gel inside the eye naturally changes over time.
                When it separates from the retina, it can sometimes pull hard
                enough to create a retinal tear. Most vitreous detachments do
                not cause retinal detachment, but the symptoms can overlap.
            </p>
        `,

        diagnosis:
            "Retinal detachment is diagnosed by examining the retina. A dilated eye examination lets an eye-care professional look for retinal tears, detached areas, and other retinal findings.",

        exams: [
            {
                title: "Dilated retinal examination",
                text:
                    "Dilating drops widen the pupil so the peripheral and central retina can be examined."
            },
            {
                title: "Retinal imaging or OCT",
                text:
                    "Imaging may be used when more detail is needed about retinal position or macular involvement."
            },
            {
                title: "Ultrasound",
                text:
                    "If the doctor cannot clearly see the retina, ocular ultrasound may help show its position."
            }
        ],

        diagnosisDetailed: `
            <h3>Why symptoms cannot confirm it</h3>
            <p>
                Posterior vitreous detachment, retinal tears, migraine-related
                phenomena, vitreous bleeding, and retinal detachment can share
                some symptoms. Examining the retina determines which process
                is occurring.
            </p>
        `,

        treatmentIntro:
            "Treatment depends on whether there is a retinal tear, how much retina is detached, and where the detachment is located.",

        treatments: [
            {
                title: "Laser or freezing treatment",
                text:
                    "Small retinal tears or breaks may sometimes be sealed with laser or freezing treatment."
            },
            {
                title: "Retinal surgery",
                text:
                    "A detached retina may require a procedure such as pneumatic retinopexy, scleral buckle surgery, vitrectomy, or a combination."
            }
        ],

        treatmentDetailed: `
            <h3>Why timing matters</h3>
            <p>
                Treatment is intended to reattach or secure the retina before
                additional retinal tissue loses function. The specific procedure
                depends on the type and extent of the detachment.
            </p>
        `,

        seekCareHeading: "Retinal-detachment symptoms need urgent evaluation.",
        seekCare:
            "A sudden increase in floaters, flashes of light, or a new dark shadow or curtain in vision should be evaluated urgently by an eye-care professional or emergency department.",

        urgent: true,

        related: [
            "cataract",
            "glaucoma"
        ],

        sources: [
            {
                name: "National Eye Institute — Retinal Detachment",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinal-detachment"
            },
            {
                name: "National Eye Institute — Surgery for Retinal Detachment",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinal-detachment/surgery-retinal-detachment"
            }
        ]
    },


    // ======================================================
    // GLAUCOMA
    // ======================================================

    {
        id: "glaucoma",
        name: "Glaucoma",
        category: "glaucoma-pressure",
        frequency: "Common",
        careTag: "Often silent early",

        aliases: [
            "eye pressure",
            "high eye pressure",
            "optic nerve pressure",
            "peripheral vision loss",
            "side vision",
            "open angle glaucoma",
            "angle closure",
            "glaucoma suspect"
        ],

        intro:
            "Glaucoma is a group of eye diseases that damage the optic nerve and can cause permanent vision loss.",

        overview: [
            "The optic nerve carries visual information from the eye to the brain. In glaucoma, that nerve becomes damaged over time.",
            "The most common form, open-angle glaucoma, usually has no noticeable early symptoms. This is why symptom questionnaires cannot rule glaucoma in or out and comprehensive eye examinations are important."
        ],

        overviewDetailed: `
            <h3>Eye pressure and glaucoma</h3>
            <p>
                Eye pressure is an important glaucoma risk factor, but glaucoma
                is defined by optic-nerve damage rather than by a particular
                pressure number. Some people develop glaucoma at pressures that
                are not unusually high, while others have elevated pressure
                without detectable glaucoma damage.
            </p>
        `,

        symptoms: [
            "Often no early symptoms",
            "Gradual peripheral-vision loss later",
            "Blind spots as disease progresses",
            "Acute angle closure can cause sudden pain and blur"
        ],

        symptomsDetailed: `
            <h3>You usually cannot feel ordinary eye pressure</h3>
            <p>
                A sensation of pressure around or behind the eyes does not by
                itself mean that intraocular pressure is high. Eye pressure is
                measured with an instrument during an eye examination.
            </p>
        `,

        causes: [
            {
                title: "Optic-nerve damage",
                text:
                    "Glaucoma damages nerve fibers that carry visual signals from the retina to the brain."
            },
            {
                title: "Drainage and eye pressure",
                text:
                    "Many types involve the way fluid drains from the front of the eye and the pressure that results."
            },
            {
                title: "Different glaucoma types",
                text:
                    "Open-angle, angle-closure, congenital, and secondary glaucomas develop through different mechanisms."
            }
        ],

        riskFactors: [
            "Increasing age",
            "Family history of glaucoma",
            "Previously elevated eye pressure",
            "Being told you are a glaucoma suspect",
            "Certain eye injuries or eye conditions",
            "Some medication exposures"
        ],

        causesDetailed: `
            <h3>Open-angle versus angle closure</h3>
            <p>
                Open-angle glaucoma typically develops slowly and silently.
                Acute angle closure is very different: pressure can rise quickly
                and produce sudden intense eye pain, redness, blur, halos, and
                nausea. That symptom pattern is an emergency.
            </p>
        `,

        diagnosis:
            "Glaucoma is diagnosed through examination of the optic nerve and related testing. Symptoms alone are not enough, especially because early open-angle glaucoma may be silent.",

        exams: [
            {
                title: "Eye-pressure measurement",
                text:
                    "Tonometry measures pressure inside the eye."
            },
            {
                title: "Optic-nerve examination",
                text:
                    "The optic nerve is examined for structural changes associated with glaucoma."
            },
            {
                title: "Visual-field testing",
                text:
                    "A visual-field test looks for areas of peripheral or central vision loss."
            },
            {
                title: "OCT imaging",
                text:
                    "OCT may measure retinal nerve-fiber and optic-nerve structures over time."
            }
        ],

        diagnosisDetailed: `
            <h3>Monitoring over time</h3>
            <p>
                Glaucoma evaluation often depends on trends rather than one
                single measurement. Eye pressure, optic-nerve appearance,
                imaging, and visual fields may be compared over time.
            </p>
        `,

        treatmentIntro:
            "Glaucoma treatment aims to slow or prevent additional optic-nerve damage.",

        treatments: [
            {
                title: "Prescription eye drops",
                text:
                    "Many glaucoma treatments lower eye pressure by changing fluid production or drainage."
            },
            {
                title: "Laser treatment",
                text:
                    "Laser procedures may be used to improve drainage or manage specific glaucoma mechanisms."
            },
            {
                title: "Surgery",
                text:
                    "Surgery may be considered when additional pressure lowering is needed."
            }
        ],

        treatmentDetailed: `
            <h3>Damage cannot simply be reversed</h3>
            <p>
                Existing glaucomatous optic-nerve damage is generally
                permanent, so treatment focuses on protecting remaining vision
                and reducing the chance of future progression.
            </p>
        `,

        seekCareHeading: "Routine glaucoma can be silent, but sudden angle-closure symptoms are different.",
        seekCare:
            "Sudden intense eye pain, redness, blurry vision, halos around lights, headache, nausea, or vomiting can fit an acute angle-closure pattern and require urgent medical attention.",

        urgent: false,

        related: [
            "cataract",
            "optic-neuritis"
        ],

        sources: [
            {
                name: "National Eye Institute — Glaucoma",
                url: "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
            }
        ]
    },


    // ======================================================
    // OPTIC NEURITIS
    // ======================================================

    {
        id: "optic-neuritis",
        name: "Optic Neuritis",
        category: "optic-nerve",
        frequency: "Uncommon",
        careTag: "Prompt evaluation",

        aliases: [
            "pain moving eye",
            "eye pain with movement",
            "washed out colors",
            "colors faded one eye",
            "one eye dimmer",
            "optic nerve inflammation",
            "vision loss one eye",
            "color vision loss"
        ],

        intro:
            "Optic neuritis is inflammation of the optic nerve, the nerve that carries visual information from the eye to the brain.",

        overview: [
            "A typical optic-neuritis pattern often involves reduced vision in one eye, pain that becomes worse with eye movement, and colors or brightness looking less vivid through the affected eye.",
            "Other optic-nerve, retinal, inflammatory, vascular, or neurologic conditions can produce similar symptoms, so an eye and neurologic evaluation may be needed to determine the cause."
        ],

        overviewDetailed: `
            <h3>Why color and brightness can change</h3>
            <p>
                The optic nerve carries information about detail, brightness,
                contrast, and color from the retina toward the brain. Optic-nerve
                dysfunction can therefore affect more than the sharpness measured
                on a standard eye chart.
            </p>
        `,

        symptoms: [
            "Reduced vision, often in one eye",
            "Pain with eye movement",
            "Colors look less vivid or washed out",
            "Brightness difference between eyes",
            "Central or other visual-field changes",
            "Sometimes flashes or light phenomena"
        ],

        symptomsDetailed: `
            <h3>Not every case is typical</h3>
            <p>
                Optic neuritis can vary in age of onset, severity, whether one
                or both eyes are involved, and how well vision recovers. Atypical
                patterns may lead clinicians to consider different inflammatory,
                autoimmune, infectious, or neurologic causes.
            </p>
        `,

        causes: [
            {
                title: "Inflammation of the optic nerve",
                text:
                    "Inflammation disrupts how visual signals travel through the optic nerve."
            },
            {
                title: "Demyelinating disease",
                text:
                    "Some cases are associated with conditions that affect the insulating material around nerve fibers."
            },
            {
                title: "Other inflammatory or immune causes",
                text:
                    "Other immune-mediated, infectious, or systemic disorders can also affect the optic nerve."
            }
        ],

        riskFactors: [
            "Certain neurologic or autoimmune conditions",
            "Previous optic-neuritis episodes",
            "Some inflammatory or infectious disorders"
        ],

        causesDetailed: `
            <h3>Typical and atypical optic neuritis</h3>
            <p>
                Clinicians distinguish typical demyelinating optic neuritis from
                atypical forms using age, laterality, severity, recurrence,
                examination findings, recovery pattern, imaging, and sometimes
                blood or other testing.
            </p>
        `,

        diagnosis:
            "Optic neuritis is evaluated through visual testing and examination of the optic nerve and visual pathways. The doctor may compare vision, color, brightness, pupils, visual fields, and eye movement between the two eyes.",

        exams: [
            {
                title: "Visual acuity and color testing",
                text:
                    "Vision and color perception are compared between the eyes."
            },
            {
                title: "Pupil and optic-nerve examination",
                text:
                    "Pupil responses and the appearance of the optic nerve can provide evidence of optic-nerve dysfunction."
            },
            {
                title: "Visual-field testing",
                text:
                    "Testing can identify areas of reduced vision that may not be obvious from an eye-chart measurement."
            },
            {
                title: "OCT and imaging when appropriate",
                text:
                    "OCT may assess optic-nerve structures, while MRI may be used when clinicians need information about the optic nerve or brain."
            }
        ],

        diagnosisDetailed: `
            <h3>The optic nerve can look normal at first</h3>
            <p>
                In many typical cases, inflammation occurs behind the visible
                portion of the optic nerve, so the nerve may not look obviously
                swollen during an eye examination even though visual function is
                affected.
            </p>
        `,

        treatmentIntro:
            "Treatment depends on whether the pattern is typical or atypical, the suspected cause, the severity of vision loss, and associated medical findings.",

        treatments: [
            {
                title: "Observation in selected cases",
                text:
                    "Some typical optic-neuritis episodes improve over time, but the diagnosis and medical context still matter."
            },
            {
                title: "Anti-inflammatory treatment",
                text:
                    "Corticosteroid or other immune treatment may be considered depending on the type and cause."
            },
            {
                title: "Treating an underlying condition",
                text:
                    "If the optic neuritis is associated with a neurologic, autoimmune, infectious, or other disorder, that condition may require separate treatment."
            }
        ],

        treatmentDetailed: `
            <h3>Treatment is cause-specific</h3>
            <p>
                Because several diseases can produce optic-neuritis-like
                symptoms, treatment should be based on professional evaluation
                rather than symptom matching alone.
            </p>
        `,

        seekCareHeading: "New optic-nerve-type symptoms deserve prompt evaluation.",
        seekCare:
            "A new reduction in vision, color or brightness difference between the eyes, or pain that becomes worse with eye movement should be professionally evaluated rather than assumed to be ordinary eye strain.",

        urgent: false,

        related: [
            "glaucoma",
            "retinal-detachment",
            "dry-eye"
        ],

        sources: [
            {
                name: "American Academy of Ophthalmology EyeWiki — Demyelinating Optic Neuritis",
                url: "https://eyewiki.aao.org/Demyelinating_Optic_Neuritis"
            },
            {
                name: "American Academy of Ophthalmology EyeWiki — Diagnostic Approach to Atypical Optic Neuritis",
                url: "https://eyewiki.aao.org/Diagnostic_Approach_to_Atypical_Optic_Neuritis"
            }
        ]
    },

{
    "id": "refractive-errors",
    "name": "Refractive Errors",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "prescription problem",
        "need glasses",
        "blurry vision",
        "refraction",
        "vision correction"
    ],
    "intro": "Refractive errors are vision problems that occur when the eye does not focus light precisely on the retina.",
    "overview": [
        "Refractive errors are vision problems that occur when the eye does not focus light precisely on the retina.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Blurry vision",
        "Squinting",
        "Eye strain",
        "Headaches",
        "Glare or halos",
        "Trouble focusing while reading"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Eye length",
            "text": "An eye that is longer or shorter than needed for its focusing power can shift the focus in front of or behind the retina."
        },
        {
            "title": "Corneal or lens shape",
            "text": "The shape of the cornea or lens changes how light bends as it enters the eye."
        },
        {
            "title": "Age-related focusing change",
            "text": "The natural lens becomes less flexible with age, producing presbyopia."
        }
    ],
    "riskFactors": [
        "Family history",
        "Childhood growth of the eye",
        "Increasing age for presbyopia"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "A refraction during an eye examination measures how lenses change the clarity of your vision and helps determine whether a refractive error is present.",
    "exams": [
        {
            "title": "Visual acuity",
            "text": "An eye chart measures clarity at different distances."
        },
        {
            "title": "Refraction",
            "text": "Different lens powers are compared to find the clearest correction."
        },
        {
            "title": "Eye-health examination",
            "text": "The eyes are also examined so blur is not automatically assumed to come from a prescription."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Eyeglasses",
            "text": "Glasses can correct the way light focuses without changing the eye itself."
        },
        {
            "title": "Contact lenses",
            "text": "Contacts can provide optical correction for many refractive errors."
        },
        {
            "title": "Refractive procedures",
            "text": "Some adults may be candidates for surgery or other procedures after a full evaluation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Most refractive errors are not emergencies.",
    "seekCare": "A sudden major vision change, new field loss, flashes and many new floaters, or significant eye pain is not a typical simple refractive-error pattern and should be evaluated promptly.",
    "urgent": false,
    "related": [
        "myopia",
        "hyperopia",
        "astigmatism",
        "presbyopia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        },
        {
            "name": "National Eye Institute — Types of Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors/types-refractive-errors"
        }
    ]
},

{
    "id": "myopia",
    "name": "Myopia (Nearsightedness)",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "nearsighted",
        "can't see far",
        "distance blur",
        "short sighted"
    ],
    "intro": "Myopia is a refractive error that makes distant objects look blurrier than nearby objects.",
    "overview": [
        "Myopia is a refractive error that makes distant objects look blurrier than nearby objects.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>Where the focus falls</h3><p>In myopia, parallel light from far-away objects comes to a focus in front of the retina when the eye is not using corrective lenses. The amount of myopia can differ between the two eyes.</p>",
    "symptoms": [
        "Distance blur",
        "Squinting to see far away",
        "Difficulty reading signs or seeing a board",
        "Eye strain or headaches in some people"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Eye length",
            "text": "Myopia commonly occurs when the eye is too long for its optical focusing power."
        },
        {
            "title": "Optical shape",
            "text": "Corneal or lens shape can also contribute to light focusing in front of the retina."
        }
    ],
    "riskFactors": [
        "Family history of myopia",
        "Childhood and teen years, when the eye is still growing"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "An eye examination and refraction determine whether distance blur is caused by myopia and how much correction is needed.",
    "exams": [
        {
            "title": "Distance visual acuity",
            "text": "The doctor checks how clearly each eye sees far-away detail."
        },
        {
            "title": "Refraction",
            "text": "Lens powers are compared to measure the myopic prescription."
        },
        {
            "title": "Eye-health evaluation",
            "text": "The retina and other structures are assessed as appropriate."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Minus-powered lenses move the optical focus onto the retina."
        },
        {
            "title": "Contact lenses",
            "text": "Contact lenses can correct myopia and may be useful for many activities."
        },
        {
            "title": "Myopia management in children",
            "text": "Some children may be offered strategies intended to slow progression after professional evaluation."
        },
        {
            "title": "Refractive surgery in adults",
            "text": "Some adults may be candidates after the prescription and eye health are stable enough."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Myopia usually causes gradual or longstanding distance blur.",
    "seekCare": "A sudden decrease in vision or new flashes, floaters, or a shadow should not be assumed to be a prescription change.",
    "urgent": false,
    "related": [
        "refractive-errors",
        "astigmatism",
        "anisometropia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Types of Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors/types-refractive-errors"
        }
    ]
},

{
    "id": "hyperopia",
    "name": "Hyperopia (Farsightedness)",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "farsighted",
        "near blur",
        "reading headache",
        "long sighted"
    ],
    "intro": "Hyperopia is a refractive error in which the eye's optical system tends to focus light behind the retina.",
    "overview": [
        "Hyperopia is a refractive error in which the eye's optical system tends to focus light behind the retina.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Near blur",
        "Eye strain",
        "Headache with reading",
        "Difficulty sustaining close work",
        "Sometimes distance blur when the amount is larger"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Eye length",
            "text": "A shorter eye can make light focus too far back."
        },
        {
            "title": "Cornea or lens power",
            "text": "The optical power of the front of the eye may be lower than needed."
        }
    ],
    "riskFactors": [
        "Family history",
        "Often present from childhood even when symptoms are not obvious"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Refraction measures hyperopia and also shows how much focusing effort the eyes may be using to compensate.",
    "exams": [
        {
            "title": "Near and distance acuity",
            "text": "Vision is checked at more than one distance."
        },
        {
            "title": "Refraction",
            "text": "Plus-powered lenses are used to measure the correction."
        },
        {
            "title": "Binocular and focusing testing",
            "text": "Additional testing may be useful when near work causes symptoms."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Plus-powered lenses can reduce the focusing demand."
        },
        {
            "title": "Contact lenses",
            "text": "Contact lenses can also correct hyperopia."
        },
        {
            "title": "Refractive procedures",
            "text": "Some adults may be candidates for surgical correction."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Hyperopia is usually evaluated routinely.",
    "seekCare": "A new major decrease in one eye, significant pain, or a sudden neurologic-type visual change needs evaluation for causes other than ordinary hyperopia.",
    "urgent": false,
    "related": [
        "refractive-errors",
        "presbyopia",
        "accommodative-insufficiency"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Farsightedness (Hyperopia)",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/farsightedness-hyperopia"
        },
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        }
    ]
},

{
    "id": "astigmatism",
    "name": "Astigmatism",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "cylinder",
        "axis",
        "distorted vision",
        "ghosting",
        "blurry all distances"
    ],
    "intro": "Astigmatism is a refractive error caused by the way the cornea or lens bends light in different directions.",
    "overview": [
        "Astigmatism is a refractive error caused by the way the cornea or lens bends light in different directions.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Blur at far and/or near distances",
        "Distorted or stretched-looking detail",
        "Squinting",
        "Eye strain",
        "Glare or halos"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Corneal shape",
            "text": "The front surface of the eye may have different curvature in different directions."
        },
        {
            "title": "Lens shape",
            "text": "Astigmatism can also come from the lens inside the eye."
        }
    ],
    "riskFactors": [
        "Family tendency",
        "Can occur together with myopia or hyperopia"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Refraction measures the amount and orientation of astigmatism, while the eye examination checks whether irregular corneal disease is contributing.",
    "exams": [
        {
            "title": "Visual acuity",
            "text": "Clarity is checked at distance and, when relevant, near."
        },
        {
            "title": "Refraction",
            "text": "Cylinder power and axis are measured."
        },
        {
            "title": "Corneal evaluation",
            "text": "Corneal shape may be evaluated more closely if the astigmatism is unusually irregular or changing."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Cylinder correction can compensate for regular astigmatism."
        },
        {
            "title": "Contact lenses",
            "text": "Several contact-lens designs can correct astigmatism."
        },
        {
            "title": "Corneal or refractive treatment",
            "text": "Some adults may be candidates for procedures depending on corneal health and prescription."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Astigmatism is usually non-urgent.",
    "seekCare": "Rapidly changing or highly irregular astigmatism, especially with increasing ghosting or one eye becoming much worse, deserves a full corneal evaluation.",
    "urgent": false,
    "related": [
        "refractive-errors",
        "myopia",
        "keratoconus"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Types of Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors/types-refractive-errors"
        }
    ]
},

{
    "id": "presbyopia",
    "name": "Presbyopia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "reading glasses",
        "arms too short",
        "hold phone farther",
        "can't focus near",
        "middle age near blur"
    ],
    "intro": "Presbyopia is the age-related loss of the eye's ability to focus comfortably on nearby objects.",
    "overview": [
        "Presbyopia is the age-related loss of the eye's ability to focus comfortably on nearby objects.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Near blur",
        "Holding reading material farther away",
        "Eye strain at near",
        "Headache during close work",
        "Needing more light for comfortable reading"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Lens aging",
            "text": "The natural lens becomes harder and less flexible with age."
        },
        {
            "title": "Reduced focusing ability",
            "text": "The eye can no longer increase its focusing power for near work as easily."
        }
    ],
    "riskFactors": [
        "Increasing age, usually becoming noticeable in midlife"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "A comprehensive eye examination can measure near vision and determine whether presbyopia, another refractive error, or an eye-health problem explains the symptoms.",
    "exams": [
        {
            "title": "Near visual testing",
            "text": "Reading clarity is checked at typical working distances."
        },
        {
            "title": "Refraction",
            "text": "The distance prescription and additional near power are measured."
        },
        {
            "title": "Eye-health examination",
            "text": "The eyes are examined for other causes of changing vision."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Reading glasses",
            "text": "Near-only glasses can provide extra focusing power."
        },
        {
            "title": "Bifocal or progressive lenses",
            "text": "Multifocal designs can provide different powers for different distances."
        },
        {
            "title": "Contact-lens options",
            "text": "Multifocal or monovision approaches may be appropriate for some people."
        },
        {
            "title": "Other procedures",
            "text": "Some adults may discuss surgical options after an individualized evaluation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Presbyopia is a normal age-related change.",
    "seekCare": "Sudden or one-eye-only major vision loss is not typical presbyopia and should be evaluated separately.",
    "urgent": false,
    "related": [
        "hyperopia",
        "refractive-errors",
        "accommodative-insufficiency"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Presbyopia",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/presbyopia"
        }
    ]
},

{
    "id": "anisometropia",
    "name": "Anisometropia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "different prescription each eye",
        "one eye stronger",
        "unequal prescription"
    ],
    "intro": "Anisometropia means the two eyes have meaningfully different refractive prescriptions.",
    "overview": [
        "Anisometropia means the two eyes have meaningfully different refractive prescriptions.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "One eye clearer than the other without correction",
        "Different glasses powers between eyes",
        "Eye strain in some people",
        "Depth-perception difficulty in some cases",
        "Children may have few obvious symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Different eye growth",
            "text": "The two eyes can develop different lengths or optical powers."
        },
        {
            "title": "Different corneal or lens power",
            "text": "Astigmatism, myopia, or hyperopia may differ substantially between eyes."
        }
    ],
    "riskFactors": [
        "Family history of refractive error",
        "Childhood, when unequal blur can interfere with visual development"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Refraction of each eye separately measures the difference. In children, the clinician also checks whether unequal blur has contributed to amblyopia.",
    "exams": [
        {
            "title": "Monocular acuity",
            "text": "Each eye is tested separately."
        },
        {
            "title": "Refraction",
            "text": "The exact prescription is measured independently in both eyes."
        },
        {
            "title": "Binocular vision assessment",
            "text": "The doctor may evaluate how well the two eyes work together."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Lenses can correct each eye to its own prescription."
        },
        {
            "title": "Contact lenses",
            "text": "Contacts may reduce image-size differences for some larger prescription differences."
        },
        {
            "title": "Amblyopia treatment in children",
            "text": "If unequal blur has affected visual development, treatment may address both the prescription and amblyopia."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Anisometropia itself is generally non-urgent.",
    "seekCare": "A newly developed large difference between the eyes deserves evaluation because not every new asymmetric vision change is a simple prescription issue.",
    "urgent": false,
    "related": [
        "myopia",
        "amblyopia",
        "anisometropic-amblyopia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        }
    ]
},

{
    "id": "accommodative-insufficiency",
    "name": "Accommodative Insufficiency",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "focusing fatigue",
        "near focus weak",
        "can't keep words clear",
        "accommodation problem"
    ],
    "intro": "Accommodative insufficiency is a focusing problem in which the eyes have difficulty producing or sustaining the amount of focus needed for near work.",
    "overview": [
        "Accommodative insufficiency is a focusing problem in which the eyes have difficulty producing or sustaining the amount of focus needed for near work.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Near blur after reading",
        "Eye strain",
        "Headaches",
        "Difficulty sustaining focus",
        "Words becoming less clear during close work",
        "Frequent breaks from reading"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Reduced focusing amplitude",
            "text": "The focusing system may not provide as much near power as expected for age."
        },
        {
            "title": "Reduced stamina",
            "text": "Focus may become less accurate during prolonged near tasks."
        }
    ],
    "riskFactors": [
        "Heavy near-work demands",
        "Can occur with convergence problems",
        "Some neurologic, systemic, medication, or injury contexts can affect accommodation"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Diagnosis requires measurement of accommodation and refraction; symptoms alone cannot distinguish it from hyperopia, convergence insufficiency, or other near-vision problems.",
    "exams": [
        {
            "title": "Refraction",
            "text": "Uncorrected refractive error is checked first."
        },
        {
            "title": "Accommodation testing",
            "text": "The clinician can measure focusing amplitude, accuracy, and stamina."
        },
        {
            "title": "Binocular testing",
            "text": "Convergence is often evaluated because the systems interact."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Optical correction",
            "text": "An appropriate prescription or near addition may reduce focusing demand in selected cases."
        },
        {
            "title": "Structured vision therapy",
            "text": "Professionally supervised accommodative exercises may be used in some cases."
        },
        {
            "title": "Addressing contributing factors",
            "text": "An associated refractive, binocular, medical, or medication issue may need attention."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Most accommodative insufficiency is not an emergency.",
    "seekCare": "A sudden loss of focusing ability together with new ptosis, abnormal pupils, double vision, or neurologic symptoms should be evaluated promptly.",
    "urgent": false,
    "related": [
        "focusing-problems",
        "convergence-insufficiency",
        "hyperopia"
    ],
    "sources": [
        {
            "name": "NCBI Bookshelf — Accommodative Insufficiency",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK587363/"
        }
    ]
},

{
    "id": "accommodative-excess",
    "name": "Accommodative Excess / Spasm",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "accommodation spasm",
        "pseudomyopia",
        "distance blur after reading",
        "can't relax focus"
    ],
    "intro": "Accommodative excess describes excessive or poorly relaxed focusing effort, sometimes causing vision to remain temporarily over-focused after close work.",
    "overview": [
        "Accommodative excess describes excessive or poorly relaxed focusing effort, sometimes causing vision to remain temporarily over-focused after close work.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Fluctuating blur",
        "Distance blur after prolonged near work",
        "Eye strain",
        "Headaches",
        "Difficulty relaxing focus from near to far"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Excess focusing effort",
            "text": "The focusing system may remain more active than needed."
        },
        {
            "title": "Near-work relationship",
            "text": "Symptoms can become more noticeable after sustained reading or screen use."
        }
    ],
    "riskFactors": [
        "Prolonged near work",
        "Uncorrected or inappropriate refractive correction",
        "Stress or other contributing factors in some cases"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "The clinician measures refraction and accommodation and may use techniques that temporarily relax focusing to determine the true refractive state.",
    "exams": [
        {
            "title": "Refraction",
            "text": "Prescription is checked carefully because over-focusing can affect the measurement."
        },
        {
            "title": "Accommodation testing",
            "text": "The ability to focus and relax focus is assessed."
        },
        {
            "title": "Binocular testing",
            "text": "Eye alignment and convergence may also be checked."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Correcting refractive error",
            "text": "An accurate prescription may reduce excessive focusing demand."
        },
        {
            "title": "Visual-habit changes",
            "text": "Near-work patterns and visual ergonomics may be addressed."
        },
        {
            "title": "Vision therapy in selected cases",
            "text": "Structured treatment may be recommended when a functional focusing disorder is confirmed."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Accommodative excess is usually non-urgent.",
    "seekCare": "Sudden persistent blur with neurologic symptoms or a major change in one eye should not be assumed to be accommodative spasm.",
    "urgent": false,
    "related": [
        "focusing-problems",
        "accommodative-infacility",
        "digital-eye-strain"
    ],
    "sources": [
        {
            "name": "NCBI Bookshelf — Accommodative Insufficiency and Accommodation Disorders",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK587363/"
        }
    ]
},

{
    "id": "accommodative-infacility",
    "name": "Accommodative Infacility",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "slow refocus",
        "focus switching",
        "near to far blur",
        "far to near blur"
    ],
    "intro": "Accommodative infacility is difficulty changing focus efficiently between different viewing distances.",
    "overview": [
        "Accommodative infacility is difficulty changing focus efficiently between different viewing distances.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Slow near-to-far refocus",
        "Slow far-to-near refocus",
        "Intermittent blur",
        "Eye strain",
        "Difficulty during tasks that alternate between screen, notes, and distance"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Slow focusing response",
            "text": "The focusing system may change power less efficiently than expected."
        },
        {
            "title": "Interaction with binocular vision",
            "text": "Accommodation and eye alignment normally work together and can influence one another."
        }
    ],
    "riskFactors": [
        "High visual demands",
        "May coexist with other accommodative or binocular disorders"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Accommodation facility testing measures how efficiently the eyes can change focus, while refraction and binocular testing look for other explanations.",
    "exams": [
        {
            "title": "Refraction",
            "text": "Prescription problems are checked first."
        },
        {
            "title": "Focus-change testing",
            "text": "Different lenses can be alternated while the patient maintains a clear target."
        },
        {
            "title": "Binocular evaluation",
            "text": "The clinician may test whether eye alignment contributes to the difficulty."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Vision correction",
            "text": "An accurate prescription can reduce unnecessary focusing stress."
        },
        {
            "title": "Structured therapy",
            "text": "Some patients may receive supervised exercises designed to improve focusing flexibility."
        },
        {
            "title": "Task and visual-demand adjustments",
            "text": "Workstation and near-task habits may be reviewed."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Accommodative infacility is usually non-urgent.",
    "seekCare": "A sudden new inability to focus with double vision, drooping, pupil changes, or neurologic symptoms should receive prompt evaluation.",
    "urgent": false,
    "related": [
        "focusing-problems",
        "accommodative-insufficiency",
        "accommodative-excess"
    ],
    "sources": [
        {
            "name": "NCBI Bookshelf — Accommodative Insufficiency",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK587363/"
        }
    ]
},

{
    "id": "focusing-problems",
    "name": "Focusing Problems (Accommodation)",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "accommodation",
        "can't focus",
        "focus problem",
        "focus near far"
    ],
    "intro": "Accommodation is the eye's focusing system for keeping objects clear at different distances, especially at near.",
    "overview": [
        "Accommodation is the eye's focusing system for keeping objects clear at different distances, especially at near.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Near blur",
        "Difficulty changing focus",
        "Eye strain",
        "Headaches during close work",
        "Blur after prolonged reading"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Reduced focusing strength",
            "text": "The eye may struggle to generate enough near focus."
        },
        {
            "title": "Difficulty relaxing focus",
            "text": "The focusing system may remain too active."
        },
        {
            "title": "Difficulty changing focus",
            "text": "Some people struggle most when switching between distances."
        }
    ],
    "riskFactors": [
        "Prolonged near work",
        "Refractive error",
        "Binocular vision problems",
        "Certain medical, medication, or injury contexts"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "A clinician measures refraction and different parts of accommodative function to identify the specific type of focusing problem.",
    "exams": [
        {
            "title": "Near vision",
            "text": "Comfort and clarity are assessed at working distance."
        },
        {
            "title": "Accommodation testing",
            "text": "Strength, accuracy, and flexibility can be measured."
        },
        {
            "title": "Binocular vision testing",
            "text": "Eye alignment is often tested because focusing and convergence are linked."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Correcting the prescription",
            "text": "Refractive correction may reduce excessive focusing demand."
        },
        {
            "title": "Near-lens support",
            "text": "Some conditions may benefit from additional near power."
        },
        {
            "title": "Vision therapy",
            "text": "Selected focusing disorders may be treated with supervised therapy."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Focusing problems are generally evaluated routinely.",
    "seekCare": "New focusing loss accompanied by double vision, new drooping, abnormal pupils, or neurologic symptoms deserves prompt medical evaluation.",
    "urgent": false,
    "related": [
        "accommodative-insufficiency",
        "accommodative-excess",
        "accommodative-infacility"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        }
    ]
},

{
    "id": "convergence-insufficiency",
    "name": "Convergence Insufficiency",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "CI",
        "double vision reading",
        "eyes drift out near",
        "words move reading",
        "lose place"
    ],
    "intro": "Convergence insufficiency is a binocular vision problem in which the eyes have difficulty maintaining comfortable inward alignment for near tasks.",
    "overview": [
        "Convergence insufficiency is a binocular vision problem in which the eyes have difficulty maintaining comfortable inward alignment for near tasks.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Eye strain with reading",
        "Intermittent double vision at near",
        "Blur at near",
        "Headaches",
        "Words seem to move",
        "Losing place while reading",
        "Closing one eye during close work"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Reduced near convergence",
            "text": "The eyes may tend to drift outward more at near than the person can comfortably compensate for."
        },
        {
            "title": "Reduced binocular stamina",
            "text": "Symptoms often increase during prolonged reading or screen use."
        }
    ],
    "riskFactors": [
        "Can occur in children or adults",
        "May coexist with accommodative problems",
        "Symptoms often increase with prolonged near work"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Diagnosis requires binocular vision measurements, including how the eyes align at near and how well they can converge while keeping a target single.",
    "exams": [
        {
            "title": "Eye alignment",
            "text": "The clinician measures the resting and active alignment of the eyes."
        },
        {
            "title": "Near point of convergence",
            "text": "The closest point at which the eyes maintain single binocular vision can be measured."
        },
        {
            "title": "Fusional vergence",
            "text": "Prism testing measures how much convergence reserve the visual system has."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Vision correction",
            "text": "Uncorrected refractive error is addressed when present."
        },
        {
            "title": "Office-based vergence/accommodative therapy",
            "text": "Structured therapy may be used for symptomatic convergence insufficiency."
        },
        {
            "title": "Prism or other optical approaches",
            "text": "Some patients may use optical support depending on age and findings."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Convergence insufficiency is usually non-urgent.",
    "seekCare": "New double vision that begins suddenly, is present at distance, is associated with drooping or neurologic symptoms, or follows significant injury should be evaluated for other causes.",
    "urgent": false,
    "related": [
        "binocular-vision-problems",
        "accommodative-insufficiency",
        "exotropia"
    ],
    "sources": [
        {
            "name": "NCBI Bookshelf — Convergence Insufficiency",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK554390/"
        }
    ]
},

{
    "id": "convergence-excess",
    "name": "Convergence Excess Pattern",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyes cross near",
        "esotropia near",
        "near inward eye turn"
    ],
    "intro": "Convergence excess describes an eye-alignment pattern in which the eyes tend to turn inward more at near than at distance.",
    "overview": [
        "Convergence excess describes an eye-alignment pattern in which the eyes tend to turn inward more at near than at distance.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Near eye strain",
        "Possible intermittent double vision",
        "Reading discomfort",
        "Headaches",
        "Eye crossing may be noticed in some people"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Near alignment demand",
            "text": "The relationship between focusing and convergence can produce more inward turning at near."
        },
        {
            "title": "Underlying esotropia or refractive factors",
            "text": "The pattern may be part of a broader eye-alignment condition."
        }
    ],
    "riskFactors": [
        "Hyperopia can influence some inward-turning patterns",
        "Childhood onset is common in some forms"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Eye-alignment measurements at both distance and near are needed to determine whether a convergence-excess pattern is present.",
    "exams": [
        {
            "title": "Distance and near alignment",
            "text": "The amount of eye turn is measured at more than one viewing distance."
        },
        {
            "title": "Refraction",
            "text": "Farsightedness and other prescription factors are assessed."
        },
        {
            "title": "Binocular function",
            "text": "Depth perception and fusion may be evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Optical correction",
            "text": "Prescription correction may reduce some forms of inward turning."
        },
        {
            "title": "Prism or binocular treatment",
            "text": "Selected cases may use optical or binocular approaches."
        },
        {
            "title": "Strabismus treatment",
            "text": "Some persistent or larger deviations may require strabismus-specific management."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Most convergence-excess patterns are non-urgent.",
    "seekCare": "A sudden new inward eye turn or double vision in an adult should be evaluated rather than assumed to be a longstanding binocular condition.",
    "urgent": false,
    "related": [
        "binocular-vision-problems",
        "esotropia",
        "hyperopia"
    ],
    "sources": [
        {
            "name": "American Association for Pediatric Ophthalmology and Strabismus — Strabismus",
            "url": "https://www.aapos.org/glossary/strabismus"
        }
    ]
},

{
    "id": "binocular-vision-problems",
    "name": "Binocular Vision Problems",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye teaming",
        "eyes don't work together",
        "binocular",
        "double vision",
        "depth perception"
    ],
    "intro": "Binocular vision depends on the two eyes aligning and coordinating so the brain can combine their images into one useful view.",
    "overview": [
        "Binocular vision depends on the two eyes aligning and coordinating so the brain can combine their images into one useful view.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Double vision",
        "Eye strain",
        "Reading discomfort",
        "Closing one eye",
        "Words moving or overlapping",
        "Depth-perception difficulty"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Alignment differences",
            "text": "The eyes may not point at the same target consistently."
        },
        {
            "title": "Vergence difficulty",
            "text": "The eyes may struggle to change alignment when looking near or far."
        },
        {
            "title": "Focusing interaction",
            "text": "Accommodation and convergence are linked and can affect one another."
        }
    ],
    "riskFactors": [
        "Childhood eye alignment history",
        "Refractive error",
        "Fatigue can reveal intermittent problems",
        "Neurologic causes are possible when symptoms begin suddenly"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "A binocular-vision examination measures eye alignment, movement, focusing, convergence, and how well the brain combines the two eye images.",
    "exams": [
        {
            "title": "Cover testing",
            "text": "The doctor observes eye movement while one eye is covered and uncovered."
        },
        {
            "title": "Prism measurements",
            "text": "Prisms can quantify misalignment."
        },
        {
            "title": "Fusion and depth testing",
            "text": "Testing evaluates whether the eyes can combine images comfortably."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Corrective lenses",
            "text": "An accurate prescription can reduce alignment or focusing stress."
        },
        {
            "title": "Prism",
            "text": "Prism lenses may help some forms of double vision or misalignment."
        },
        {
            "title": "Vision therapy",
            "text": "Some functional binocular disorders respond to structured therapy."
        },
        {
            "title": "Strabismus surgery",
            "text": "Surgery may be considered for some persistent eye turns."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Longstanding binocular problems are often non-urgent.",
    "seekCare": "Sudden double vision, especially with new drooping, weakness, severe headache, unequal pupils, or other neurologic symptoms, needs prompt evaluation.",
    "urgent": false,
    "related": [
        "convergence-insufficiency",
        "strabismus",
        "focusing-problems"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        }
    ]
},

{
    "id": "strabismus",
    "name": "Strabismus",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "crossed eyes",
        "eye turn",
        "misaligned eyes",
        "lazy eye turn"
    ],
    "intro": "Strabismus means the eyes are not aligned in the same direction.",
    "overview": [
        "Strabismus means the eyes are not aligned in the same direction.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "One eye turns inward, outward, up, or down",
        "Double vision when newly acquired",
        "Closing one eye",
        "Abnormal head position",
        "Reduced depth perception",
        "Children may suppress one eye rather than report double vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Eye-movement control",
            "text": "Strabismus often involves the neuromuscular control that coordinates eye position."
        },
        {
            "title": "Refractive contribution",
            "text": "Farsightedness can contribute to some inward-turning forms."
        },
        {
            "title": "Neurologic or acquired causes",
            "text": "Some adult-onset strabismus occurs after nerve, muscle, thyroid, injury, or other medical problems."
        }
    ],
    "riskFactors": [
        "Childhood or family history",
        "Refractive error",
        "Neurologic, thyroid, muscle, or injury context for acquired cases"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "An eye-care professional measures eye alignment in different directions and at different distances and checks vision in each eye.",
    "exams": [
        {
            "title": "Cover testing",
            "text": "Covering and uncovering each eye helps reveal and measure the misalignment."
        },
        {
            "title": "Eye-movement examination",
            "text": "Movement is checked in different gaze directions."
        },
        {
            "title": "Refraction and vision",
            "text": "Prescription and acuity are checked in each eye."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Some forms improve when refractive error is corrected."
        },
        {
            "title": "Prism",
            "text": "Prism may reduce double vision in selected cases."
        },
        {
            "title": "Amblyopia treatment",
            "text": "Children with amblyopia may need treatment for the weaker eye."
        },
        {
            "title": "Eye-muscle surgery",
            "text": "Surgery can change eye alignment when appropriate."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Longstanding strabismus is often managed non-urgently.",
    "seekCare": "A new eye turn or sudden double vision in an adult should be professionally evaluated because acquired strabismus can have neurologic, muscular, orbital, or other causes.",
    "urgent": false,
    "related": [
        "esotropia",
        "exotropia",
        "hypertropia",
        "amblyopia"
    ],
    "sources": [
        {
            "name": "American Association for Pediatric Ophthalmology and Strabismus — Strabismus",
            "url": "https://www.aapos.org/glossary/strabismus"
        }
    ]
},

{
    "id": "esotropia",
    "name": "Esotropia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye turns in",
        "crossed eyes",
        "inward strabismus"
    ],
    "intro": "Esotropia is a type of strabismus in which one eye or both eyes turn inward.",
    "overview": [
        "Esotropia is a type of strabismus in which one eye or both eyes turn inward.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Inward eye turn",
        "Possible double vision when newly acquired",
        "Closing one eye",
        "Depth-perception changes",
        "Children may develop amblyopia"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Accommodative esotropia",
            "text": "In some children, focusing related to farsightedness contributes to the inward turn."
        },
        {
            "title": "Infantile or other strabismus forms",
            "text": "Other inward-turning patterns can begin early or develop later for different reasons."
        }
    ],
    "riskFactors": [
        "Hyperopia",
        "Family history of strabismus",
        "Childhood visual development"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "The amount of inward turn is measured at distance and near, and refraction determines whether farsightedness contributes.",
    "exams": [
        {
            "title": "Cover and prism testing",
            "text": "Alignment is measured accurately."
        },
        {
            "title": "Cycloplegic refraction in children",
            "text": "Drops may temporarily relax focusing so farsightedness can be measured accurately."
        },
        {
            "title": "Vision testing",
            "text": "Each eye is checked for amblyopia."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Glasses",
            "text": "Correcting farsightedness can improve some accommodative esotropia."
        },
        {
            "title": "Amblyopia therapy",
            "text": "A weaker eye may need separate treatment."
        },
        {
            "title": "Strabismus surgery",
            "text": "Surgery may be considered when alignment remains significantly abnormal."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Childhood esotropia should be evaluated so vision can develop as well as possible.",
    "seekCare": "A sudden new inward eye turn with double vision in an older child or adult deserves prompt assessment for an acquired cause.",
    "urgent": false,
    "related": [
        "strabismus",
        "hyperopia",
        "strabismic-amblyopia"
    ],
    "sources": [
        {
            "name": "American Association for Pediatric Ophthalmology and Strabismus — Strabismus",
            "url": "https://www.aapos.org/glossary/strabismus"
        }
    ]
},

{
    "id": "exotropia",
    "name": "Exotropia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye turns out",
        "outward drift",
        "wall eye",
        "intermittent exotropia"
    ],
    "intro": "Exotropia is a type of strabismus in which one eye turns outward.",
    "overview": [
        "Exotropia is a type of strabismus in which one eye turns outward.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Outward eye drift",
        "May be intermittent",
        "Often more noticeable when tired or daydreaming",
        "Possible eye strain or double vision",
        "Closing one eye in bright light can occur in some people"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Intermittent alignment control",
            "text": "Some people can align the eyes much of the time but lose control intermittently."
        },
        {
            "title": "Other strabismus causes",
            "text": "Outward deviations can also be constant or associated with neurologic or visual conditions."
        }
    ],
    "riskFactors": [
        "Family history",
        "Childhood visual development",
        "Poor vision in one eye can influence some outward deviations"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "An eye-care professional measures the outward deviation, how often it occurs, and how well binocular vision is maintained.",
    "exams": [
        {
            "title": "Cover testing",
            "text": "The outward movement is observed and measured."
        },
        {
            "title": "Control assessment",
            "text": "The clinician evaluates how easily the person regains alignment."
        },
        {
            "title": "Depth perception",
            "text": "Stereo vision may be measured."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Small well-controlled deviations may sometimes be monitored."
        },
        {
            "title": "Vision correction",
            "text": "An accurate prescription can affect alignment control."
        },
        {
            "title": "Vision therapy in selected cases",
            "text": "Some binocular control problems may be treated non-surgically."
        },
        {
            "title": "Surgery",
            "text": "Surgery may be used when the deviation is significant or poorly controlled."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Most longstanding exotropia is non-urgent.",
    "seekCare": "A sudden new outward eye turn or new persistent double vision should be evaluated for an acquired cause.",
    "urgent": false,
    "related": [
        "strabismus",
        "convergence-insufficiency",
        "amblyopia"
    ],
    "sources": [
        {
            "name": "American Association for Pediatric Ophthalmology and Strabismus — Strabismus",
            "url": "https://www.aapos.org/glossary/strabismus"
        }
    ]
},

{
    "id": "hypertropia",
    "name": "Hypertropia",
    "category": "vision-prescription",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "one eye higher",
        "vertical strabismus",
        "vertical double vision"
    ],
    "intro": "Hypertropia is vertical strabismus in which one eye sits higher than the other.",
    "overview": [
        "Hypertropia is vertical strabismus in which one eye sits higher than the other.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Vertical or diagonal double vision",
        "One eye appears higher",
        "Head tilt or unusual head position",
        "Eye strain"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Eye-muscle or nerve imbalance",
            "text": "Vertical alignment depends on several eye muscles and their nerves."
        },
        {
            "title": "Longstanding or acquired causes",
            "text": "Some vertical deviations begin earlier in life, while others develop after nerve, muscle, injury, or orbital problems."
        }
    ],
    "riskFactors": [
        "Previous strabismus",
        "Cranial nerve or orbital disorders",
        "Trauma in acquired cases"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Alignment is measured in multiple directions of gaze and head positions because vertical deviations can change depending on where the person looks.",
    "exams": [
        {
            "title": "Prism and cover testing",
            "text": "The vertical difference is quantified."
        },
        {
            "title": "Eye-movement testing",
            "text": "Different gaze directions can reveal which muscles or nerves are involved."
        },
        {
            "title": "Neurologic/orbital evaluation when needed",
            "text": "New or unusual patterns may require additional investigation."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Prism",
            "text": "Prism lenses may reduce double vision in selected cases."
        },
        {
            "title": "Treating an underlying cause",
            "text": "An acquired nerve, muscle, or orbital problem may need specific treatment."
        },
        {
            "title": "Strabismus surgery",
            "text": "Surgery may be considered when the vertical deviation remains significant."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Longstanding hypertropia may be managed routinely.",
    "seekCare": "New vertical double vision or a new vertical eye turn should be assessed promptly, especially with neurologic symptoms.",
    "urgent": false,
    "related": [
        "strabismus",
        "binocular-vision-problems"
    ],
    "sources": [
        {
            "name": "American Association for Pediatric Ophthalmology and Strabismus — Strabismus",
            "url": "https://www.aapos.org/glossary/strabismus"
        }
    ]
},

{
    "id": "amblyopia",
    "name": "Amblyopia (Lazy Eye)",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "lazy eye",
        "weak eye",
        "one eye always blurry childhood"
    ],
    "intro": "Amblyopia is reduced vision that develops when the brain and one eye, or less commonly both eyes, do not develop normal visual function together during childhood.",
    "overview": [
        "Amblyopia is reduced vision that develops when the brain and one eye, or less commonly both eyes, do not develop normal visual function together during childhood.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Poorer vision in one eye",
        "Reduced depth perception",
        "Squinting",
        "Closing one eye",
        "Head tilt",
        "Often no obvious symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Unequal refractive error",
            "text": "One eye may send a consistently blurrier image to the brain."
        },
        {
            "title": "Strabismus",
            "text": "The brain may suppress an eye that points in a different direction."
        },
        {
            "title": "Visual deprivation",
            "text": "A cataract or another obstruction early in life can prevent normal visual development."
        }
    ],
    "riskFactors": [
        "Premature birth",
        "Family history of amblyopia or childhood eye disease",
        "Strabismus",
        "Large or unequal refractive error"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Amblyopia is diagnosed by testing vision in each eye and looking for the eye condition that interfered with normal visual development.",
    "exams": [
        {
            "title": "Monocular visual acuity",
            "text": "Each eye is tested separately using age-appropriate methods."
        },
        {
            "title": "Refraction",
            "text": "The prescription is measured carefully."
        },
        {
            "title": "Alignment and eye-health examination",
            "text": "Strabismus, cataract, and other causes are evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Correcting the cause",
            "text": "Glasses, contact lenses, or treatment of an obstructing eye condition may be the first step."
        },
        {
            "title": "Patching",
            "text": "Covering the stronger eye can encourage use of the weaker eye in selected children."
        },
        {
            "title": "Atropine penalization",
            "text": "Blur-inducing drops in the stronger eye may be used as an alternative in some children."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Amblyopia treatment is most effective during childhood.",
    "seekCare": "Children should receive recommended vision screening because amblyopia can be difficult for families to notice. A new vision decline in an older child or adult is not typical amblyopia and should be evaluated for an acquired problem.",
    "urgent": false,
    "related": [
        "anisometropic-amblyopia",
        "strabismic-amblyopia",
        "strabismus",
        "anisometropia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Amblyopia (Lazy Eye)",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/amblyopia-lazy-eye"
        }
    ]
},

{
    "id": "anisometropic-amblyopia",
    "name": "Anisometropic Amblyopia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "one eye strong prescription",
        "amblyopia no eye turn",
        "unequal glasses lazy eye"
    ],
    "intro": "Anisometropic amblyopia develops when one eye has a substantially different uncorrected prescription during childhood and the brain learns to rely more on the clearer eye.",
    "overview": [
        "Anisometropic amblyopia develops when one eye has a substantially different uncorrected prescription during childhood and the brain learns to rely more on the clearer eye.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Longstanding weaker vision in one eye",
        "May have no visible eye turn",
        "Reduced depth perception",
        "Often discovered on vision screening"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Unequal refractive error",
            "text": "Persistent unequal image clarity during visual development can reduce how strongly the brain uses the blurrier eye."
        }
    ],
    "riskFactors": [
        "Anisometropia",
        "High refractive error",
        "Missed childhood vision screening"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "The clinician measures the prescription and best-corrected vision in each eye and checks for other causes of reduced vision.",
    "exams": [
        {
            "title": "Refraction",
            "text": "The prescription difference between the eyes is measured."
        },
        {
            "title": "Best-corrected acuity",
            "text": "Vision is checked after appropriate optical correction."
        },
        {
            "title": "Eye-health examination",
            "text": "Other eye disease is ruled out."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Full refractive correction",
            "text": "Correcting both eyes is usually an essential first step."
        },
        {
            "title": "Amblyopia therapy",
            "text": "Patching or atropine may be added depending on age, severity, and response."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "This is a childhood visual-development condition.",
    "seekCare": "A sudden new difference between the eyes later in life should not be labeled amblyopia without confirming a longstanding childhood history.",
    "urgent": false,
    "related": [
        "amblyopia",
        "anisometropia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Amblyopia",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/amblyopia-lazy-eye"
        }
    ]
},

{
    "id": "strabismic-amblyopia",
    "name": "Strabismic Amblyopia",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "crossed eye lazy eye",
        "strabismus weak eye"
    ],
    "intro": "Strabismic amblyopia develops when the brain suppresses vision from an eye that is misaligned during childhood.",
    "overview": [
        "Strabismic amblyopia develops when the brain suppresses vision from an eye that is misaligned during childhood.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Reduced vision in the eye that turns",
        "Visible eye misalignment",
        "Reduced depth perception",
        "Child may not report double vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Visual suppression",
            "text": "The developing brain may ignore the image from the misaligned eye to avoid confusion or double vision."
        }
    ],
    "riskFactors": [
        "Childhood strabismus",
        "Earlier or more constant eye misalignment"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Vision is tested separately in each eye while the clinician also measures the type and size of the strabismus.",
    "exams": [
        {
            "title": "Monocular vision testing",
            "text": "Each eye's acuity is measured."
        },
        {
            "title": "Alignment testing",
            "text": "The direction and amount of eye turn are measured."
        },
        {
            "title": "Refraction",
            "text": "Prescription differences are also checked."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Optical correction",
            "text": "Glasses may improve clarity and sometimes alignment."
        },
        {
            "title": "Amblyopia treatment",
            "text": "Patching or atropine may strengthen use of the weaker eye."
        },
        {
            "title": "Strabismus management",
            "text": "Alignment treatment may involve glasses, surgery, or another approach depending on the type."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Early recognition matters for visual development.",
    "seekCare": "A new adult eye turn with reduced vision is not the usual pattern of childhood strabismic amblyopia and needs an acquired-cause evaluation.",
    "urgent": false,
    "related": [
        "amblyopia",
        "strabismus",
        "esotropia",
        "exotropia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Amblyopia",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/amblyopia-lazy-eye"
        }
    ]
},

{
    "id": "digital-eye-strain",
    "name": "Digital Eye Strain",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "computer vision syndrome",
        "screen headache",
        "screen blur",
        "eyes tired computer"
    ],
    "intro": "Digital eye strain is a group of eye and vision symptoms that become noticeable during prolonged computer, phone, tablet, or other close-up work.",
    "overview": [
        "Digital eye strain is a group of eye and vision symptoms that become noticeable during prolonged computer, phone, tablet, or other close-up work.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Tired or sore eyes",
        "Temporary blur",
        "Difficulty refocusing",
        "Headache",
        "Dry or irritated eyes",
        "Neck or shoulder discomfort can accompany prolonged device use"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Sustained near demand",
            "text": "Reading and screen work require continuous focusing and binocular coordination."
        },
        {
            "title": "Reduced blinking",
            "text": "People often blink less completely or less frequently during concentrated screen use, which can worsen ocular-surface symptoms."
        },
        {
            "title": "Uncorrected vision problems",
            "text": "Refractive, focusing, binocular, or dry-eye issues may become more noticeable with prolonged near work."
        }
    ],
    "riskFactors": [
        "Long uninterrupted screen sessions",
        "Dry environments",
        "Uncorrected prescription",
        "Focusing or binocular vision problems"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Evaluation looks for refractive error, dry eye, focusing problems, and binocular disorders rather than treating screen use as one single diagnosis.",
    "exams": [
        {
            "title": "Refraction",
            "text": "Prescription accuracy is checked."
        },
        {
            "title": "Ocular-surface examination",
            "text": "Dryness and blinking-related findings may be assessed."
        },
        {
            "title": "Near and binocular testing",
            "text": "Focusing and eye coordination can be evaluated when symptoms suggest it."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Visual breaks",
            "text": "Regular changes in viewing distance may reduce sustained near demand."
        },
        {
            "title": "Ergonomic adjustments",
            "text": "Viewing distance, text size, screen position, and lighting can be adjusted."
        },
        {
            "title": "Treating contributing eye problems",
            "text": "Dry eye, refractive error, or binocular/focusing disorders may require specific treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Digital eye strain is usually not dangerous.",
    "seekCare": "Persistent symptoms, substantial pain, double vision, or vision changes that continue away from screens should be evaluated rather than assumed to come only from device use.",
    "urgent": false,
    "related": [
        "dry-eye",
        "accommodative-insufficiency",
        "convergence-insufficiency",
        "focusing-problems"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Refractive Errors",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/refractive-errors"
        },
        {
            "name": "NCBI Bookshelf — Accommodative Insufficiency",
            "url": "https://www.ncbi.nlm.nih.gov/books/NBK587363/"
        }
    ]
},

{
    "id": "color-vision-deficiency",
    "name": "Color Vision Deficiency",
    "category": "vision-prescription",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "color blind",
        "red green",
        "can't tell colors",
        "color blindness"
    ],
    "intro": "Color vision deficiency means a person has difficulty distinguishing certain colors or shades in the way most people do.",
    "overview": [
        "Color vision deficiency means a person has difficulty distinguishing certain colors or shades in the way most people do.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Difficulty telling some colors apart",
        "Colors may look less different from one another",
        "Usually longstanding when inherited",
        "Rare severe forms can include light sensitivity or reduced clarity"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Inherited color-vision difference",
            "text": "Most common red-green deficiencies are inherited."
        },
        {
            "title": "Acquired color-vision change",
            "text": "Eye, optic-nerve, neurologic, or medication-related problems can sometimes change color perception later in life."
        }
    ],
    "riskFactors": [
        "Family history",
        "Inherited forms are much more common in males",
        "Certain eye or neurologic conditions can cause acquired color changes"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "Color plate testing and other color-vision tests can determine whether a deficiency is present and whether the pattern suggests an inherited or acquired problem.",
    "exams": [
        {
            "title": "Color plate test",
            "text": "Patterns made of colored dots test whether specific colors can be distinguished."
        },
        {
            "title": "Additional color testing",
            "text": "More detailed testing may be used if the first test is unclear or the pattern is unusual."
        },
        {
            "title": "Eye-health evaluation",
            "text": "New color changes may lead to examination of the retina and optic nerve."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Adaptation and visual aids",
            "text": "Most people with inherited color deficiency adapt well; labels, apps, and other aids can help."
        },
        {
            "title": "Special filters",
            "text": "Some tinted glasses or contact lenses may improve color discrimination for certain tasks but do not restore normal color vision."
        },
        {
            "title": "Treating an acquired cause",
            "text": "When color change is secondary to another eye or medical problem, management focuses on that cause."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Inherited color deficiency is usually non-urgent.",
    "seekCare": "A new color or brightness difference between the eyes—especially with reduced vision or pain on eye movement—should be evaluated because acquired changes can involve the retina or optic nerve.",
    "urgent": false,
    "related": [
        "optic-neuritis",
        "refractive-errors"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Color Vision Deficiency",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness"
        },
        {
            "name": "National Eye Institute — Testing for Color Vision Deficiency",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness/testing-color-vision-deficiency"
        }
    ]
},

{
    "id": "low-vision",
    "name": "Low Vision",
    "category": "vision-prescription",
    "frequency": "Varies",
    "careTag": "Depends on the cause",
    "aliases": [
        "can't see even with glasses",
        "vision impairment",
        "vision rehabilitation",
        "magnifier"
    ],
    "intro": "Low vision means vision remains significantly limited enough to affect everyday activities even after standard correction or treatment has been used as much as possible.",
    "overview": [
        "Low vision means vision remains significantly limited enough to affect everyday activities even after standard correction or treatment has been used as much as possible.",
        "An eye examination can determine whether this pattern is present and whether another eye or health problem is contributing."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The amount and type of visual difficulty can vary between people and between the two eyes. Direct testing is needed to separate this condition from other causes of blur, strain, or double vision.</p>",
    "symptoms": [
        "Difficulty reading",
        "Difficulty recognizing faces",
        "Central or peripheral vision loss",
        "Night-vision difficulty",
        "Blur or haze that standard glasses do not adequately correct"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>Blur, headache, eye strain, and reading difficulty are not unique to one diagnosis. The pattern, distance, timing, and eye alignment findings help an eye-care professional tell similar problems apart.</p>",
    "causes": [
        {
            "title": "Underlying eye disease",
            "text": "Low vision results from another eye or visual-system condition rather than from aging alone."
        },
        {
            "title": "Different patterns of vision loss",
            "text": "The cause may affect central vision, peripheral vision, contrast, night vision, or several functions."
        }
    ],
    "riskFactors": [
        "Age-related macular degeneration",
        "Glaucoma",
        "Diabetic retinopathy",
        "Cataract",
        "Eye or brain injury",
        "Inherited eye disease"
    ],
    "causesDetailed": "<h3>Why an exam matters</h3><p>Visual symptoms can be affected by refractive error, focusing effort, the way the eyes work together, and eye health. The same symptom can therefore have more than one explanation.</p>",
    "diagnosis": "A low-vision evaluation determines what vision remains, what condition caused the loss, and which strategies or devices may improve day-to-day function.",
    "exams": [
        {
            "title": "Comprehensive dilated examination",
            "text": "The underlying eye condition is evaluated."
        },
        {
            "title": "Functional vision assessment",
            "text": "Near, distance, contrast, field, and task-related needs may be assessed."
        },
        {
            "title": "Low-vision device evaluation",
            "text": "Different magnification, lighting, electronic, and accessibility tools may be tried."
        }
    ],
    "diagnosisDetailed": "<h3>Testing is tailored to the problem</h3><p>Not everyone needs every test. The examination is chosen based on age, symptoms, whether one or both eyes are affected, and what the clinician finds during the initial evaluation.</p>",
    "treatmentIntro": "Management depends on the specific findings and how much the problem affects comfortable, useful vision.",
    "treatments": [
        {
            "title": "Treat the underlying condition when possible",
            "text": "Some causes of vision loss can be treated or stabilized even when all lost vision cannot be restored."
        },
        {
            "title": "Vision rehabilitation",
            "text": "Training can help people use remaining vision more effectively."
        },
        {
            "title": "Optical and electronic aids",
            "text": "Magnifiers, telescopic devices, screen enlargement, contrast settings, and text-to-speech can support daily activities."
        }
    ],
    "treatmentDetailed": "<h3>Treatment should match the cause</h3><p>A treatment that helps one focusing or alignment problem may not be appropriate for another. That is why the specific diagnosis matters before choosing lenses, prisms, therapy, surgery, or another approach.</p>",
    "seekCareHeading": "Low vision should be evaluated rather than simply accepted as a normal part of aging.",
    "seekCare": "Any new or rapidly worsening vision loss should be evaluated promptly. Vision rehabilitation can also be useful even when the underlying loss is permanent.",
    "urgent": false,
    "related": [
        "glaucoma",
        "cataract",
        "retinal-detachment"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Low Vision",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/low-vision"
        }
    ]
},

{
    "id": "corneal-conditions",
    "name": "Corneal Conditions",
    "category": "dry-eye-cornea",
    "frequency": "Common as a group",
    "careTag": "Depends on the condition",
    "aliases": [
        "cornea",
        "corneal disease",
        "corneal problem",
        "front of eye"
    ],
    "intro": "Corneal conditions are disorders that affect the clear front layer of the eye, which helps protect the eye and focus light.",
    "overview": [
        "Corneal conditions are disorders that affect the clear front layer of the eye, which helps protect the eye and focus light.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Eye pain",
        "Blurry vision",
        "Red or watery eyes",
        "Light sensitivity",
        "Foreign-body sensation",
        "Cloudy cornea"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Injury",
            "text": "Scratches, foreign material, chemicals, heat, and other trauma can damage the cornea."
        },
        {
            "title": "Inflammation or infection",
            "text": "Keratitis can result from infection, contact-lens problems, injury, or other inflammation."
        },
        {
            "title": "Dry-eye and tear-film problems",
            "text": "An unstable tear film can make the surface uncomfortable and affect clarity."
        },
        {
            "title": "Inherited or structural disease",
            "text": "Corneal dystrophies and ectatic disorders can affect corneal shape or transparency."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Eye injury or exposure",
        "Family history of corneal disease",
        "Dry-eye or eyelid disease"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "A comprehensive eye examination, usually including slit-lamp examination of the cornea, is used to determine which corneal condition is present.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Magnification allows the doctor to inspect the corneal layers and surface."
        },
        {
            "title": "Fluorescein dye",
            "text": "Dye can highlight scratches, surface defects, and tear-film breakup."
        },
        {
            "title": "Corneal imaging",
            "text": "Topography, tomography, or thickness measurements may be used for shape or structural disorders."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Surface treatment",
            "text": "Lubrication or prescription drops may be used for some surface disorders."
        },
        {
            "title": "Anti-infective or anti-inflammatory treatment",
            "text": "Medicines may be required depending on the cause."
        },
        {
            "title": "Procedures",
            "text": "Laser treatment, cross-linking, or corneal transplantation may be used for selected advanced conditions."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Some corneal symptoms need urgent evaluation.",
    "seekCare": "Intense pain, vision change, a very red and watery eye, a retained object, or significant trauma should not wait for a routine appointment.",
    "urgent": false,
    "related": [
        "dry-eye",
        "keratitis",
        "corneal-abrasion",
        "keratoconus"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "aqueous-deficient-dry-eye",
    "name": "Aqueous-Deficient Dry Eye",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "not enough tears",
        "low tear production",
        "Sjogren dry eye"
    ],
    "intro": "Aqueous-deficient dry eye occurs when the lacrimal system does not produce enough watery tear fluid to keep the eye surface adequately wet.",
    "overview": [
        "Aqueous-deficient dry eye occurs when the lacrimal system does not produce enough watery tear fluid to keep the eye surface adequately wet.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Dry or scratchy feeling",
        "Burning or stinging",
        "Fluctuating blur",
        "Redness",
        "Light sensitivity",
        "Reflex watering"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Reduced tear production",
            "text": "The tear-producing glands may not supply enough aqueous tear fluid."
        },
        {
            "title": "Systemic or inflammatory context",
            "text": "Some autoimmune conditions can reduce normal tear production."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Sjögren syndrome",
        "Some autoimmune disease",
        "Some medications"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Dry-eye testing may include examination of the surface and eyelids together with measurement of tear volume or tear production.",
    "exams": [
        {
            "title": "Tear-production testing",
            "text": "The doctor may estimate or measure how much tear fluid is produced."
        },
        {
            "title": "Surface staining",
            "text": "Dye can show areas where the corneal or conjunctival surface is under stress."
        },
        {
            "title": "Slit-lamp examination",
            "text": "The tear meniscus and ocular surface can be inspected."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Artificial tears or longer-lasting lubricants may help replace missing moisture."
        },
        {
            "title": "Prescription therapy",
            "text": "Prescription treatment may be used when inflammation or tear production needs additional support."
        },
        {
            "title": "Tear conservation",
            "text": "Some patients may discuss punctal plugs or other ways to reduce tear drainage."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Aqueous-deficient dry eye is usually managed routinely.",
    "seekCare": "Severe pain, a sudden vision change, or a markedly red eye should be evaluated for causes beyond uncomplicated dry eye.",
    "urgent": false,
    "related": [
        "dry-eye",
        "evaporative-dry-eye",
        "meibomian-gland-dysfunction"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Dry Eye",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/dry-eye"
        },
        {
            "name": "National Eye Institute — Testing for Dry Eye",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/dry-eye/testing-dry-eye"
        }
    ]
},

{
    "id": "evaporative-dry-eye",
    "name": "Evaporative Dry Eye",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "tears evaporate",
        "screen dry eye",
        "wind dry eye"
    ],
    "intro": "Evaporative dry eye occurs when tears disappear from the eye surface too quickly, often because the tear film does not have a stable oil layer.",
    "overview": [
        "Evaporative dry eye occurs when tears disappear from the eye surface too quickly, often because the tear film does not have a stable oil layer.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Burning",
        "Gritty sensation",
        "Fluctuating blur",
        "Symptoms worse with screens",
        "Wind or fan sensitivity",
        "Contact-lens discomfort"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Meibomian-gland dysfunction",
            "text": "Oil glands in the eyelids may not release enough healthy oil to slow tear evaporation."
        },
        {
            "title": "Blinking and environment",
            "text": "Incomplete blinking, dry air, wind, and prolonged concentration can increase evaporation."
        }
    ],
    "riskFactors": [
        "Meibomian-gland dysfunction",
        "Long screen sessions",
        "Dry or windy environments",
        "Contact-lens wear",
        "Rosacea"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The tear film, eyelid margins, blinking, and oil glands are examined to determine whether evaporation is contributing.",
    "exams": [
        {
            "title": "Tear break-up testing",
            "text": "The doctor may observe how long the tear film remains stable after a blink."
        },
        {
            "title": "Meibomian-gland examination",
            "text": "Lid-margin glands and their secretions can be assessed."
        },
        {
            "title": "Surface staining",
            "text": "Dyes can highlight areas of surface irritation."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Artificial tears may reduce friction and temporary visual fluctuation."
        },
        {
            "title": "Eyelid and gland care",
            "text": "Treatment may focus on improving oil-gland function."
        },
        {
            "title": "Environmental changes",
            "text": "Reducing airflow and taking visual breaks can help some people."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Evaporative dry eye is usually non-urgent.",
    "seekCare": "Pain, substantial light sensitivity, or reduced vision—especially in a contact-lens wearer—should be evaluated for corneal inflammation or infection.",
    "urgent": false,
    "related": [
        "dry-eye",
        "meibomian-gland-dysfunction",
        "ocular-rosacea"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Dry Eye",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/dry-eye"
        }
    ]
},

{
    "id": "meibomian-gland-dysfunction",
    "name": "Meibomian Gland Dysfunction (MGD)",
    "category": "dry-eye-cornea",
    "categories": ["dry-eye-cornea", "eyelids-tears"],
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "MGD",
        "oil glands eyelid",
        "blocked oil glands",
        "meibomian"
    ],
    "intro": "Meibomian gland dysfunction affects the oil-producing glands along the eyelids and can make the tear film evaporate too quickly.",
    "overview": [
        "Meibomian gland dysfunction affects the oil-producing glands along the eyelids and can make the tear film evaporate too quickly.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Dry or burning eyes",
        "Fluctuating blur",
        "Crusty or irritated lid margins",
        "Contact-lens discomfort",
        "Symptoms worse later in the day"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Blocked or altered oil glands",
            "text": "Meibomian glands may release too little oil or oil of altered quality."
        },
        {
            "title": "Eyelid inflammation",
            "text": "Blepharitis and rosacea can occur together with gland dysfunction."
        }
    ],
    "riskFactors": [
        "Blepharitis",
        "Rosacea",
        "Increasing age",
        "Long screen use",
        "Contact-lens wear"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "An eye-care professional can inspect the eyelid margins and gland openings and evaluate the quality of the tear film.",
    "exams": [
        {
            "title": "Lid-margin examination",
            "text": "The openings of the meibomian glands are inspected."
        },
        {
            "title": "Gland expression",
            "text": "A clinician may gently evaluate the oil released from the glands."
        },
        {
            "title": "Tear-film assessment",
            "text": "Evaporation and tear stability can be checked."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Eyelid care",
            "text": "Warm compresses and professionally recommended lid care may support gland function."
        },
        {
            "title": "Prescription treatment",
            "text": "Some people require medication for inflammation or associated eyelid disease."
        },
        {
            "title": "Office-based treatment",
            "text": "Selected patients may be offered procedures targeting obstructed or poorly functioning glands."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "MGD is usually non-urgent.",
    "seekCare": "A suddenly painful red eye, particularly in a contact-lens wearer, should not be assumed to be MGD or simple dry eye.",
    "urgent": false,
    "related": [
        "dry-eye",
        "evaporative-dry-eye",
        "ocular-rosacea"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "exposure-keratopathy",
    "name": "Exposure Keratopathy",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Can become urgent if the cornea is damaged",
    "aliases": [
        "eye won't close",
        "lagophthalmos cornea",
        "sleep eyes open",
        "exposed cornea"
    ],
    "intro": "Exposure keratopathy occurs when part of the cornea is not adequately covered or lubricated because the eyelids do not fully protect the eye surface.",
    "overview": [
        "Exposure keratopathy occurs when part of the cornea is not adequately covered or lubricated because the eyelids do not fully protect the eye surface.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Dryness",
        "Foreign-body sensation",
        "Burning",
        "Redness",
        "Blur",
        "Symptoms after sleep",
        "Light sensitivity"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Incomplete lid closure",
            "text": "The eyelids may not fully close during blinking or sleep."
        },
        {
            "title": "Reduced blinking",
            "text": "Neurologic, eyelid, orbital, or environmental factors can leave the surface exposed."
        }
    ],
    "riskFactors": [
        "Lagophthalmos",
        "Facial nerve weakness",
        "Thyroid eye disease",
        "Eyelid surgery or trauma",
        "Prominent eyes"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The cornea is examined for areas of dryness or epithelial damage, and eyelid closure is evaluated.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Surface injury and dryness can be seen under magnification."
        },
        {
            "title": "Fluorescein staining",
            "text": "Dye highlights exposed or damaged surface areas."
        },
        {
            "title": "Eyelid assessment",
            "text": "Blink strength and lid closure are checked."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication and moisture protection",
            "text": "The surface may be protected with lubricants or moisture-preserving measures."
        },
        {
            "title": "Treating the eyelid or nerve cause",
            "text": "Underlying lid-position or facial-nerve problems may need separate treatment."
        },
        {
            "title": "Procedures in severe cases",
            "text": "Additional protective procedures may be used when the cornea remains exposed."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Persistent corneal exposure should be evaluated.",
    "seekCare": "Increasing pain, light sensitivity, redness, or reduced vision can mean the exposed cornea is becoming damaged and should receive prompt care.",
    "urgent": false,
    "related": [
        "dry-eye",
        "corneal-ulcer",
        "lagophthalmos"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "corneal-abrasion",
    "name": "Corneal Abrasion",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Prompt evaluation may be needed",
    "aliases": [
        "scratched cornea",
        "scratch eye",
        "paper cut eye",
        "poked eye"
    ],
    "intro": "A corneal abrasion is a scratch or scrape of the clear front surface of the eye.",
    "overview": [
        "A corneal abrasion is a scratch or scrape of the clear front surface of the eye.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Sudden eye pain",
        "Feeling that something is in the eye",
        "Tearing",
        "Redness",
        "Light sensitivity",
        "Blur"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Scratch or poke",
            "text": "Fingernails, branches, paper, makeup tools, and other objects can scrape the cornea."
        },
        {
            "title": "Foreign material",
            "text": "A particle under the eyelid or on the cornea can scratch the surface."
        },
        {
            "title": "Contact-lens injury",
            "text": "Lens-related trauma or dryness can injure the epithelium."
        }
    ],
    "riskFactors": [
        "Eye injury",
        "Contact-lens wear",
        "Work or sports exposure without eye protection"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Fluorescein dye and slit-lamp examination can reveal a surface defect and help check for retained foreign material.",
    "exams": [
        {
            "title": "Fluorescein staining",
            "text": "A special dye highlights the scratched area."
        },
        {
            "title": "Eyelid inspection",
            "text": "The clinician may look underneath the lid for trapped material."
        },
        {
            "title": "Vision check",
            "text": "Visual acuity is measured to assess the effect on vision."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Protection while the surface heals",
            "text": "Management is chosen based on the size, location, and cause of the abrasion."
        },
        {
            "title": "Medication when appropriate",
            "text": "Prescription treatment may be used to reduce infection risk or control symptoms."
        },
        {
            "title": "Follow-up",
            "text": "Some abrasions need re-examination to confirm healing."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Eye scratches should be evaluated when symptoms are substantial.",
    "seekCare": "Severe pain, reduced vision, contact-lens-associated injury, chemical exposure, or concern that an object remains in the eye deserves prompt professional care.",
    "urgent": false,
    "related": [
        "corneal-foreign-body",
        "recurrent-corneal-erosion",
        "keratitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "corneal-foreign-body",
    "name": "Corneal Foreign Body",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Prompt or urgent depending on mechanism",
    "aliases": [
        "something in eye",
        "metal in eye",
        "debris in eye",
        "foreign object eye"
    ],
    "intro": "A corneal foreign body is material such as dust, metal, plant matter, or another particle that becomes lodged on or in the corneal surface.",
    "overview": [
        "A corneal foreign body is material such as dust, metal, plant matter, or another particle that becomes lodged on or in the corneal surface.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Foreign-body sensation",
        "Tearing",
        "Pain",
        "Redness",
        "Blinking discomfort",
        "Light sensitivity",
        "Blur"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Airborne debris",
            "text": "Particles can enter the eye during work, yardwork, sports, or windy conditions."
        },
        {
            "title": "High-speed material",
            "text": "Grinding, drilling, or machinery can launch material toward the eye."
        }
    ],
    "riskFactors": [
        "Work with tools or machinery",
        "Yardwork",
        "Lack of protective eyewear",
        "High-speed impact"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "An eye-care professional examines the surface and eyelids to locate material and check how deeply it has entered.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Magnification helps locate a foreign body."
        },
        {
            "title": "Fluorescein staining",
            "text": "Dye can show associated scratches."
        },
        {
            "title": "Additional injury assessment",
            "text": "High-speed or penetrating mechanisms may require deeper evaluation."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Professional removal",
            "text": "Surface material may be removed using appropriate sterile techniques."
        },
        {
            "title": "Treatment of the remaining abrasion",
            "text": "The scratched surface may need medication and follow-up."
        },
        {
            "title": "Deeper-injury management",
            "text": "Embedded or penetrating material may require specialist or emergency treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "A retained object should not be ignored.",
    "seekCare": "If something appears stuck in the eye, the injury involved high-speed debris, vision changed, or pain is intense, seek urgent professional care rather than trying to remove embedded material yourself.",
    "urgent": true,
    "related": [
        "corneal-abrasion",
        "corneal-laceration"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "recurrent-corneal-erosion",
    "name": "Recurrent Corneal Erosion",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye pain waking up",
        "corneal erosion",
        "morning sharp eye pain"
    ],
    "intro": "Recurrent corneal erosion happens when the outer corneal cells do not stay firmly attached and repeatedly break down.",
    "overview": [
        "Recurrent corneal erosion happens when the outer corneal cells do not stay firmly attached and repeatedly break down.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Sharp pain on waking",
        "Foreign-body sensation",
        "Tearing",
        "Light sensitivity",
        "Temporary blur",
        "Repeated similar episodes"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Previous corneal injury",
            "text": "An earlier abrasion can leave the outer cells less securely attached."
        },
        {
            "title": "Corneal dystrophy",
            "text": "Epithelial basement membrane or lattice dystrophy can predispose the surface to erosion."
        }
    ],
    "riskFactors": [
        "Past corneal abrasion",
        "Epithelial basement membrane dystrophy",
        "Lattice corneal dystrophy"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination and fluorescein staining can show epithelial irregularity or an active erosion.",
    "exams": [
        {
            "title": "Surface examination",
            "text": "The corneal epithelium is inspected for loose or damaged areas."
        },
        {
            "title": "Fluorescein staining",
            "text": "Dye highlights surface defects."
        },
        {
            "title": "Dystrophy evaluation",
            "text": "The clinician may look for an inherited or structural corneal pattern."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Longer-lasting lubrication may reduce friction between the eyelid and cornea."
        },
        {
            "title": "Protective treatment",
            "text": "A bandage contact lens or other prescribed treatment may be used in selected cases."
        },
        {
            "title": "Procedures",
            "text": "Persistent recurrences may be treated with laser or another surface procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Recurring sharp pain on waking deserves evaluation.",
    "seekCare": "A new severe episode, significant vision change, or signs of infection should be examined promptly.",
    "urgent": false,
    "related": [
        "corneal-abrasion",
        "epithelial-basement-membrane-dystrophy",
        "lattice-corneal-dystrophy"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "keratitis",
    "name": "Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "corneal inflammation",
        "red painful cornea",
        "keratitis eye"
    ],
    "intro": "Keratitis means inflammation of the cornea and can result from infection, injury, contact-lens problems, or other causes.",
    "overview": [
        "Keratitis means inflammation of the cornea and can result from infection, injury, contact-lens problems, or other causes.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Eye pain",
        "Redness",
        "Tearing",
        "Blur",
        "Light sensitivity",
        "Foreign-body sensation"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Infection",
            "text": "Bacteria, viruses, fungi, or other organisms can infect the cornea."
        },
        {
            "title": "Contact-lens problems",
            "text": "Lens wear is an important context for infectious keratitis."
        },
        {
            "title": "Injury or inflammation",
            "text": "Surface damage and noninfectious inflammation can also affect the cornea."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Corneal injury",
        "Reduced immune function",
        "Prior ocular herpes"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The cornea is examined under magnification, and testing may be performed when infection is suspected.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The doctor looks for corneal inflammation, defects, or infiltrates."
        },
        {
            "title": "Fluorescein dye",
            "text": "Surface breakdown can be highlighted."
        },
        {
            "title": "Microbiologic testing",
            "text": "Cultures or samples may be taken for concerning infectious ulcers."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Cause-specific medication",
            "text": "Antibiotic, antiviral, antifungal, anti-inflammatory, or other treatment may be used depending on the cause."
        },
        {
            "title": "Contact-lens interruption",
            "text": "Lens wear is generally stopped while a significant corneal problem is being evaluated and treated."
        },
        {
            "title": "Close follow-up",
            "text": "Infectious or deep keratitis may require frequent re-examination."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Keratitis can be time-sensitive.",
    "seekCare": "Pain, redness, light sensitivity, or decreased vision—especially in a contact-lens wearer—should be evaluated promptly.",
    "urgent": true,
    "related": [
        "infectious-keratitis",
        "corneal-ulcer",
        "contact-lens-keratitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "infectious-keratitis",
    "name": "Infectious Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Prompt or urgent",
    "aliases": [
        "corneal infection",
        "infected cornea",
        "microbial keratitis"
    ],
    "intro": "Infectious keratitis is a corneal infection that can damage the clear tissue at the front of the eye.",
    "overview": [
        "Infectious keratitis is a corneal infection that can damage the clear tissue at the front of the eye.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Pain",
        "Redness",
        "Blur",
        "Light sensitivity",
        "Tearing or discharge",
        "Foreign-body sensation"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Microbial infection",
            "text": "Bacteria, viruses, fungi, or other organisms can invade damaged corneal tissue."
        },
        {
            "title": "Surface breakdown",
            "text": "A scratch, contact-lens problem, or other injury can create an entry point."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Sleeping or swimming in lenses",
        "Eye injury",
        "Reduced immune function",
        "Prior corneal disease"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Direct slit-lamp examination is needed, and a corneal sample may be collected when the infection is significant or unusual.",
    "exams": [
        {
            "title": "Corneal examination",
            "text": "The location, size, depth, and appearance of the infected area are assessed."
        },
        {
            "title": "Fluorescein staining",
            "text": "Surface breakdown is mapped."
        },
        {
            "title": "Cultures or laboratory testing",
            "text": "Samples may help identify an organism when needed."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Antimicrobial medication",
            "text": "Treatment is selected according to the likely or confirmed organism."
        },
        {
            "title": "Frequent monitoring",
            "text": "Some infections need close follow-up because the cornea can change quickly."
        },
        {
            "title": "Surgery in severe cases",
            "text": "Advanced damage may occasionally require corneal surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Possible infectious keratitis should be evaluated promptly.",
    "seekCare": "A painful red eye with light sensitivity or reduced vision, especially during contact-lens wear, should not wait for a routine appointment.",
    "urgent": true,
    "related": [
        "keratitis",
        "corneal-ulcer",
        "contact-lens-keratitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "corneal-ulcer",
    "name": "Corneal Ulcer",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Urgent evaluation",
    "aliases": [
        "white spot cornea",
        "open sore cornea",
        "corneal ulcer infection"
    ],
    "intro": "A corneal ulcer is an open sore or area of tissue breakdown on the cornea, often related to infection or significant inflammation.",
    "overview": [
        "A corneal ulcer is an open sore or area of tissue breakdown on the cornea, often related to infection or significant inflammation.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Eye pain",
        "Redness",
        "Light sensitivity",
        "Blur",
        "Tearing or discharge",
        "Possible visible white or cloudy spot"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Infection",
            "text": "Microbial keratitis can produce an ulcerated area."
        },
        {
            "title": "Severe surface injury",
            "text": "Trauma, contact-lens complications, or other corneal disease can damage the surface."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Eye injury",
        "Reduced immune function",
        "Ocular-surface disease"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "A slit-lamp examination determines whether there is an epithelial defect and underlying corneal inflammation; cultures may be taken.",
    "exams": [
        {
            "title": "Slit-lamp and fluorescein",
            "text": "The defect and surrounding cornea are examined."
        },
        {
            "title": "Microbiologic sampling",
            "text": "A sample may be collected to identify an infectious cause."
        },
        {
            "title": "Vision measurement",
            "text": "The effect on visual function is documented."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Cause-specific medication",
            "text": "Antimicrobial or other prescription treatment is used based on the clinical findings."
        },
        {
            "title": "Close follow-up",
            "text": "The size and depth of the ulcer may be monitored frequently."
        },
        {
            "title": "Corneal surgery",
            "text": "Severe scarring, thinning, or perforation risk may require surgical treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "A suspected corneal ulcer is not a routine dry-eye problem.",
    "seekCare": "Pain, redness, photophobia, or decreased vision—particularly with contact lenses—needs prompt professional assessment.",
    "urgent": true,
    "related": [
        "infectious-keratitis",
        "contact-lens-keratitis",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "contact-lens-keratitis",
    "name": "Contact-Lens–Associated Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Prompt or urgent",
    "aliases": [
        "contact lens infection",
        "contact lens red eye",
        "contact lens pain"
    ],
    "intro": "Contact-lens–associated keratitis is corneal inflammation or infection that occurs in the setting of contact-lens wear.",
    "overview": [
        "Contact-lens–associated keratitis is corneal inflammation or infection that occurs in the setting of contact-lens wear.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Pain during or after lens wear",
        "Redness",
        "Light sensitivity",
        "Blur",
        "Tearing",
        "Lens intolerance"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Microbial infection",
            "text": "Contact lenses can create conditions that allow organisms to infect the cornea."
        },
        {
            "title": "Mechanical or surface stress",
            "text": "Poor fit, overwear, dryness, or damaged lenses can irritate the corneal surface."
        }
    ],
    "riskFactors": [
        "Sleeping in lenses",
        "Swimming or showering in lenses",
        "Poor cleaning or replacement habits",
        "Overwear",
        "Water exposure"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The cornea is examined after the lenses are removed, and testing may be added if infection is suspected.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The cornea is checked for epithelial defects, infiltrates, and inflammation."
        },
        {
            "title": "Lens and care-history review",
            "text": "Wearing schedule, hygiene, water exposure, and solutions are reviewed."
        },
        {
            "title": "Cultures when needed",
            "text": "More serious lesions may require laboratory testing."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Stop lens wear during evaluation",
            "text": "A significant corneal problem should be assessed without continuing lens use."
        },
        {
            "title": "Cause-specific treatment",
            "text": "Medication is selected according to whether infection, inflammation, or mechanical injury is present."
        },
        {
            "title": "Lens-care changes",
            "text": "Future fit, hygiene, replacement, or wearing practices may be adjusted."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Painful red-eye symptoms in a contact-lens wearer deserve prompt evaluation.",
    "seekCare": "Do not assume significant pain, light sensitivity, or vision loss is simply dry eye or lens discomfort.",
    "urgent": true,
    "related": [
        "keratitis",
        "infectious-keratitis",
        "corneal-ulcer"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "ocular-herpes",
    "name": "Ocular Herpes / Herpes Simplex Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "eye herpes",
        "HSV keratitis",
        "herpes cornea"
    ],
    "intro": "Ocular herpes occurs when herpes simplex virus affects the eye and can involve the cornea.",
    "overview": [
        "Ocular herpes occurs when herpes simplex virus affects the eye and can involve the cornea.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Redness",
        "Pain or irritation",
        "Blur",
        "Tearing",
        "Light sensitivity",
        "Recurrent one-eye episodes"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Herpes simplex virus",
            "text": "After infection, the virus can remain dormant and later reactivate."
        },
        {
            "title": "Corneal involvement",
            "text": "Deeper or repeated inflammation can affect corneal clarity and cause scarring."
        }
    ],
    "riskFactors": [
        "Previous ocular herpes",
        "Prior herpes simplex infection",
        "Immune or physiologic stress may precede some recurrences"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination is used to identify the location and type of ocular involvement because treatment differs by corneal layer.",
    "exams": [
        {
            "title": "Corneal examination",
            "text": "Characteristic epithelial or deeper corneal findings may be seen under magnification."
        },
        {
            "title": "Fluorescein staining",
            "text": "Surface lesions can be highlighted."
        },
        {
            "title": "Additional testing",
            "text": "Laboratory testing may be used when the diagnosis is uncertain."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Antiviral medicine",
            "text": "Antiviral treatment can control active herpes infection."
        },
        {
            "title": "Inflammation management",
            "text": "Some deeper inflammatory forms require carefully supervised anti-inflammatory treatment."
        },
        {
            "title": "Recurrence prevention",
            "text": "Selected patients may use longer-term antiviral therapy."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Possible ocular herpes should be professionally evaluated.",
    "seekCare": "A recurrent painful or light-sensitive red eye with blur deserves prompt examination because deeper corneal involvement can threaten vision.",
    "urgent": false,
    "related": [
        "keratitis",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Other Types of Corneal Disease",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/other-types-corneal-disease"
        }
    ]
},

{
    "id": "herpes-zoster-eye-disease",
    "name": "Herpes Zoster Eye Disease",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "shingles eye",
        "zoster eye",
        "herpes zoster ophthalmicus"
    ],
    "intro": "Herpes zoster can affect the eye when shingles involves the nerve distribution around the forehead and eye.",
    "overview": [
        "Herpes zoster can affect the eye when shingles involves the nerve distribution around the forehead and eye.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Eye redness",
        "Pain",
        "Light sensitivity",
        "Blur",
        "Facial or forehead rash in the same region",
        "Corneal or internal eye inflammation"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Varicella-zoster virus reactivation",
            "text": "The virus that causes chickenpox can later reactivate as shingles."
        },
        {
            "title": "Ocular involvement",
            "text": "The cornea, conjunctiva, uvea, nerves, or other eye structures may become involved."
        }
    ],
    "riskFactors": [
        "Shingles involving the face or forehead",
        "Increasing age",
        "Reduced immune function"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Eye examination determines whether the cornea or deeper eye structures are involved.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The surface and anterior eye are checked for inflammation."
        },
        {
            "title": "Corneal sensation and staining",
            "text": "The surface and corneal nerves may be assessed."
        },
        {
            "title": "Dilated examination",
            "text": "Deeper inflammation may require examination of the back of the eye."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Antiviral medicine",
            "text": "Systemic antiviral treatment is commonly used for shingles and ocular involvement."
        },
        {
            "title": "Eye-specific treatment",
            "text": "Additional drops or other therapy may be required depending on which structures are inflamed."
        },
        {
            "title": "Follow-up",
            "text": "Some complications can occur after the skin rash begins to improve."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Shingles near the eye deserves prompt medical and eye evaluation.",
    "seekCare": "Eye pain, redness, light sensitivity, or vision change with a facial shingles pattern should not wait for routine care.",
    "urgent": true,
    "related": [
        "ocular-herpes",
        "keratitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "acanthamoeba-keratitis",
    "name": "Acanthamoeba Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Urgent evaluation",
    "aliases": [
        "acanthamoeba",
        "water contact lens infection",
        "amoeba keratitis"
    ],
    "intro": "Acanthamoeba keratitis is a rare corneal infection caused by a microscopic organism found in water and the environment.",
    "overview": [
        "Acanthamoeba keratitis is a rare corneal infection caused by a microscopic organism found in water and the environment.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Eye pain",
        "Redness",
        "Light sensitivity",
        "Blur",
        "Tearing",
        "Persistent corneal symptoms"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Acanthamoeba infection",
            "text": "The organism can infect the cornea when it gains access through the surface."
        },
        {
            "title": "Contact-lens and water exposure",
            "text": "Contact lenses exposed to nonsterile water are an important risk context."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Swimming or showering in lenses",
        "Using nonsterile water with lenses",
        "Corneal injury"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Diagnosis relies on direct corneal examination and may require specialized laboratory testing or imaging.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The pattern and depth of corneal inflammation are examined."
        },
        {
            "title": "Corneal sampling",
            "text": "Laboratory testing may be needed to identify the organism."
        },
        {
            "title": "Specialized imaging",
            "text": "Some centers use confocal microscopy to look for characteristic organisms."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Prolonged anti-amoebic therapy",
            "text": "Treatment often requires specialized prescription medication over an extended period."
        },
        {
            "title": "Close monitoring",
            "text": "The cornea may need repeated examination during treatment."
        },
        {
            "title": "Corneal surgery",
            "text": "Advanced scarring or damage may occasionally require transplantation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "This rare infection can be serious.",
    "seekCare": "Persistent pain, redness, photophobia, or decreased vision in a contact-lens wearer—especially after water exposure—requires prompt professional evaluation.",
    "urgent": true,
    "related": [
        "contact-lens-keratitis",
        "infectious-keratitis",
        "corneal-ulcer"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "fungal-keratitis",
    "name": "Fungal Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Urgent evaluation",
    "aliases": [
        "fungus cornea",
        "plant injury corneal infection"
    ],
    "intro": "Fungal keratitis is a corneal infection caused by fungi and often occurs after certain injuries or environmental exposures.",
    "overview": [
        "Fungal keratitis is a corneal infection caused by fungi and often occurs after certain injuries or environmental exposures.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Pain or irritation",
        "Redness",
        "Blur",
        "Light sensitivity",
        "Tearing or discharge",
        "Persistent corneal inflammation"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Fungal infection",
            "text": "Fungi can enter the cornea through a damaged surface."
        },
        {
            "title": "Plant or soil exposure",
            "text": "Trauma involving vegetation or soil can create a relevant exposure."
        }
    ],
    "riskFactors": [
        "Eye injury involving plant material",
        "Agricultural or soil exposure",
        "Contact-lens wear",
        "Reduced immune function"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "A corneal examination plus microbiologic testing may be required because fungal infection can resemble other types of keratitis.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The location and appearance of corneal inflammation are assessed."
        },
        {
            "title": "Corneal cultures or scraping",
            "text": "Laboratory testing helps identify a fungal cause."
        },
        {
            "title": "Follow-up measurements",
            "text": "The lesion is monitored for response or progression."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Antifungal medication",
            "text": "Prescription antifungal treatment is used when fungal infection is diagnosed or strongly suspected."
        },
        {
            "title": "Close follow-up",
            "text": "Treatment may take time and requires monitoring."
        },
        {
            "title": "Surgery in severe disease",
            "text": "Advanced infection or structural damage may require corneal surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Fungal keratitis requires prompt professional care.",
    "seekCare": "A painful red or light-sensitive eye after plant- or soil-related injury should not be managed as simple irritation.",
    "urgent": true,
    "related": [
        "infectious-keratitis",
        "corneal-ulcer",
        "corneal-abrasion"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "keratoconus",
    "name": "Keratoconus",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "cone cornea",
        "irregular astigmatism",
        "corneal ectasia",
        "ghosting vision"
    ],
    "intro": "Keratoconus is a progressive corneal condition in which the cornea becomes thinner and develops a more irregular, cone-like shape.",
    "overview": [
        "Keratoconus is a progressive corneal condition in which the cornea becomes thinner and develops a more irregular, cone-like shape.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>How the shape changes</h3><p>The central or paracentral cornea becomes thinner and steeper, producing irregular astigmatism and reduced optical quality. The two eyes are often affected to different degrees.</p>",
    "symptoms": [
        "Progressive blur",
        "Increasing astigmatism",
        "Ghosting or multiple images",
        "Glare",
        "Halos",
        "Light sensitivity",
        "Frequent prescription changes"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Corneal thinning and steepening",
            "text": "The corneal shape becomes less regular over time."
        },
        {
            "title": "Biomechanical weakness",
            "text": "The corneal tissue does not maintain its usual rounded contour."
        }
    ],
    "riskFactors": [
        "Often begins in the teens or young adulthood",
        "Family history",
        "Eye rubbing may be associated",
        "Some connective-tissue or allergic conditions"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Corneal topography or tomography maps corneal shape and helps identify thinning and irregular steepening.",
    "exams": [
        {
            "title": "Refraction",
            "text": "Prescription and irregular astigmatism are measured."
        },
        {
            "title": "Corneal topography/tomography",
            "text": "Detailed shape maps identify asymmetry and ectasia."
        },
        {
            "title": "Pachymetry",
            "text": "Corneal thickness can be measured."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Glasses or contact lenses",
            "text": "Optical correction can improve vision in earlier or milder disease."
        },
        {
            "title": "Specialty contact lenses",
            "text": "Rigid or scleral lenses can improve optical quality when the cornea is irregular."
        },
        {
            "title": "Corneal cross-linking",
            "text": "Cross-linking may be recommended to strengthen the cornea and slow progression."
        },
        {
            "title": "Corneal transplant",
            "text": "Advanced scarring or severe disease may require transplantation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Keratoconus is usually not an emergency, but progression matters.",
    "seekCare": "Frequent prescription changes, increasing ghosting, or rapidly worsening vision—especially in a younger person—should prompt a corneal evaluation.",
    "urgent": false,
    "related": [
        "corneal-dystrophies",
        "post-lasik-ectasia",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "post-lasik-ectasia",
    "name": "Post-Refractive-Surgery Corneal Ectasia",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Usually non-emergency",
    "aliases": [
        "LASIK ectasia",
        "post LASIK keratoconus",
        "corneal ectasia after LASIK"
    ],
    "intro": "Corneal ectasia after refractive surgery is progressive corneal thinning and steepening that can develop after procedures such as LASIK or, less commonly, other corneal refractive surgery.",
    "overview": [
        "Corneal ectasia after refractive surgery is progressive corneal thinning and steepening that can develop after procedures such as LASIK or, less commonly, other corneal refractive surgery.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Increasing blur",
        "Worsening or irregular astigmatism",
        "Ghosting",
        "Glare",
        "Prescription becoming less stable"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Corneal biomechanical weakening",
            "text": "The cornea can become less structurally stable after tissue-removing surgery in susceptible eyes."
        },
        {
            "title": "Underlying susceptibility",
            "text": "Some eyes may have subtle pre-existing shape or thickness risk factors."
        }
    ],
    "riskFactors": [
        "Previous LASIK or other corneal refractive surgery",
        "Thin or irregular cornea",
        "Keratoconus susceptibility"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Corneal topography/tomography and thickness measurements are used to evaluate postoperative shape change.",
    "exams": [
        {
            "title": "Corneal mapping",
            "text": "Serial maps can show progressive steepening or asymmetry."
        },
        {
            "title": "Pachymetry",
            "text": "Corneal thickness is measured."
        },
        {
            "title": "Refraction",
            "text": "Changing prescription and irregular astigmatism are documented."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Specialty lenses",
            "text": "Rigid or scleral lenses can improve vision from irregular astigmatism."
        },
        {
            "title": "Corneal cross-linking",
            "text": "Cross-linking may be considered to reduce further progression."
        },
        {
            "title": "Corneal surgery",
            "text": "Advanced cases may require other surgical treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Postoperative ectasia is generally not an emergency, but progression should not be ignored.",
    "seekCare": "Increasing distortion or prescription instability after refractive surgery warrants a corneal specialist evaluation.",
    "urgent": false,
    "related": [
        "keratoconus",
        "corneal-dystrophies"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "corneal-edema",
    "name": "Corneal Edema",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "swollen cornea",
        "cloudy cornea",
        "morning haze"
    ],
    "intro": "Corneal edema is swelling of the cornea caused by excess fluid within its tissue.",
    "overview": [
        "Corneal edema is swelling of the cornea caused by excess fluid within its tissue.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Hazy or cloudy vision",
        "Halos around lights",
        "Glare",
        "Light sensitivity",
        "Possible discomfort",
        "Sometimes worse after waking"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Endothelial cell dysfunction",
            "text": "The inner corneal cells normally pump fluid out of the cornea."
        },
        {
            "title": "Surgery, injury, or inflammation",
            "text": "Damage to endothelial cells can reduce their ability to keep the cornea clear."
        }
    ],
    "riskFactors": [
        "Fuchs endothelial dystrophy",
        "Previous eye surgery",
        "Eye inflammation or trauma",
        "Some pressure-related disorders"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination can identify swelling, and corneal thickness or endothelial-cell testing can help determine the cause.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The doctor looks for haze, swelling, and epithelial changes."
        },
        {
            "title": "Pachymetry",
            "text": "Corneal thickness can be measured."
        },
        {
            "title": "Endothelial imaging",
            "text": "Cell density and shape may be evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Medical management",
            "text": "Drops or ointments may help reduce symptoms or surface swelling in selected cases."
        },
        {
            "title": "Treat the underlying cause",
            "text": "Pressure, inflammation, or postoperative problems may need separate treatment."
        },
        {
            "title": "Endothelial corneal surgery",
            "text": "Severe endothelial failure may be treated with partial-thickness corneal transplantation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Corneal edema can range from mild to significant.",
    "seekCare": "Sudden painful clouding, substantial redness, or major vision loss should be evaluated promptly.",
    "urgent": false,
    "related": [
        "fuchs-dystrophy",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "fuchs-dystrophy",
    "name": "Fuchs Endothelial Corneal Dystrophy",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "Fuchs cornea",
        "morning blurry cornea",
        "endothelial dystrophy"
    ],
    "intro": "Fuchs dystrophy is a progressive corneal disease in which endothelial cells become less effective at removing fluid from the cornea.",
    "overview": [
        "Fuchs dystrophy is a progressive corneal disease in which endothelial cells become less effective at removing fluid from the cornea.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Morning blur that may improve later",
        "Glare",
        "Halos",
        "Cloudy cornea",
        "Light sensitivity",
        "Pain in more advanced disease"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Endothelial cell loss",
            "text": "The inner corneal cells gradually become less able to keep the cornea dehydrated and transparent."
        },
        {
            "title": "Fluid accumulation",
            "text": "The cornea swells as endothelial pumping becomes less effective."
        }
    ],
    "riskFactors": [
        "Often becomes symptomatic later in adulthood",
        "Family history",
        "Previous eye surgery can reveal or worsen endothelial weakness"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination, corneal thickness, and endothelial-cell assessment can help diagnose and monitor Fuchs dystrophy.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Characteristic endothelial changes and swelling may be visible."
        },
        {
            "title": "Pachymetry",
            "text": "Thickness can be followed over time."
        },
        {
            "title": "Endothelial cell imaging",
            "text": "Cell density and morphology may be assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Symptom management",
            "text": "Drops or ointments may be used to reduce surface swelling in selected cases."
        },
        {
            "title": "Endothelial keratoplasty",
            "text": "Partial-thickness corneal transplantation can replace dysfunctional endothelial tissue in advanced disease."
        },
        {
            "title": "Full transplant in selected cases",
            "text": "Less commonly, a larger corneal transplant may be necessary."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Fuchs dystrophy usually changes gradually.",
    "seekCare": "A sudden painful red eye or abrupt major vision decrease suggests something beyond uncomplicated Fuchs and should be evaluated promptly.",
    "urgent": false,
    "related": [
        "corneal-edema",
        "corneal-dystrophies"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "epithelial-basement-membrane-dystrophy",
    "name": "Epithelial Basement Membrane Dystrophy",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "map dot fingerprint",
        "EBMD",
        "map-dot-fingerprint dystrophy"
    ],
    "intro": "Epithelial basement membrane dystrophy is a common corneal surface disorder in which the outer corneal layer attaches irregularly.",
    "overview": [
        "Epithelial basement membrane dystrophy is a common corneal surface disorder in which the outer corneal layer attaches irregularly.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Fluctuating blur",
        "Foreign-body sensation",
        "Recurrent sharp pain",
        "Pain on waking",
        "Light sensitivity",
        "Watery eyes"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Abnormal epithelial attachment",
            "text": "The outer corneal cells may not attach smoothly to the layer beneath them."
        },
        {
            "title": "Recurrent erosion",
            "text": "Loose areas can break down, especially when the eyelid first opens after sleep."
        }
    ],
    "riskFactors": [
        "Often becomes noticeable in adulthood",
        "May occur in families",
        "Can be present without symptoms"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination may show map-, dot-, or fingerprint-like epithelial patterns and areas of recurrent erosion.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The epithelial pattern can often be seen directly."
        },
        {
            "title": "Fluorescein staining",
            "text": "Active surface defects are highlighted."
        },
        {
            "title": "Refraction",
            "text": "Fluctuating corneal shape can affect vision and prescription."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Lubricating drops or ointments may reduce friction."
        },
        {
            "title": "Bandage lens or surface treatment",
            "text": "Selected recurrent erosions may need additional protective treatment."
        },
        {
            "title": "Laser or other procedures",
            "text": "Persistent erosions can sometimes be treated with a corneal surface procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Most cases are not emergencies.",
    "seekCare": "Repeated severe morning pain or a persistent non-healing surface defect should be professionally evaluated.",
    "urgent": false,
    "related": [
        "recurrent-corneal-erosion",
        "corneal-dystrophies"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "lattice-corneal-dystrophy",
    "name": "Lattice Corneal Dystrophy",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Usually non-emergency",
    "aliases": [
        "lattice dystrophy",
        "inherited corneal lines"
    ],
    "intro": "Lattice corneal dystrophy is an inherited condition in which abnormal material accumulates within the cornea in branching or lattice-like lines.",
    "overview": [
        "Lattice corneal dystrophy is an inherited condition in which abnormal material accumulates within the cornea in branching or lattice-like lines.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Blur",
        "Recurrent corneal erosions",
        "Eye pain",
        "Foreign-body sensation",
        "Light sensitivity",
        "Watery eyes"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Inherited corneal protein deposits",
            "text": "Abnormal material gradually accumulates in the corneal tissue."
        },
        {
            "title": "Surface instability",
            "text": "The dystrophy can predispose the outer corneal layer to recurrent erosion."
        }
    ],
    "riskFactors": [
        "Family history of corneal dystrophy",
        "Often begins earlier in life than many other corneal dystrophies"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination identifies the characteristic corneal pattern; family history can support the diagnosis.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Branching corneal deposits can be visualized."
        },
        {
            "title": "Surface assessment",
            "text": "Recurrent erosion or scarring can be evaluated."
        },
        {
            "title": "Vision testing",
            "text": "The effect on clarity is measured."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication and erosion treatment",
            "text": "Surface symptoms may be managed similarly to other recurrent erosions."
        },
        {
            "title": "Laser treatment",
            "text": "Phototherapeutic keratectomy may be useful in some cases."
        },
        {
            "title": "Corneal transplantation",
            "text": "Advanced visual loss or scarring may require transplant surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Lattice dystrophy usually progresses gradually.",
    "seekCare": "A sudden severe erosion episode or major new vision change should be evaluated promptly.",
    "urgent": false,
    "related": [
        "corneal-dystrophies",
        "recurrent-corneal-erosion"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "granular-corneal-dystrophy",
    "name": "Granular Corneal Dystrophy",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Usually non-emergency",
    "aliases": [
        "granular dystrophy",
        "corneal deposits"
    ],
    "intro": "Granular corneal dystrophy is an inherited condition in which small deposits develop within the cornea and may gradually affect clarity.",
    "overview": [
        "Granular corneal dystrophy is an inherited condition in which small deposits develop within the cornea and may gradually affect clarity.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Gradually increasing blur",
        "Glare",
        "Possible recurrent irritation",
        "Visible corneal deposits on examination"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Inherited protein deposits",
            "text": "Abnormal material accumulates within corneal tissue."
        },
        {
            "title": "Progressive opacity",
            "text": "Deposits can become more numerous or dense over time."
        }
    ],
    "riskFactors": [
        "Family history of corneal dystrophy"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "A slit-lamp examination can identify the distribution and appearance of the corneal deposits.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The deposits are examined directly."
        },
        {
            "title": "Vision and refraction",
            "text": "The effect on visual clarity is measured."
        },
        {
            "title": "Corneal imaging",
            "text": "Imaging may be used when planning treatment."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Milder disease may simply be monitored."
        },
        {
            "title": "Laser treatment",
            "text": "PTK can remove some superficial visually significant deposits."
        },
        {
            "title": "Corneal transplantation",
            "text": "Advanced opacity may require transplantation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Granular dystrophy is generally non-urgent.",
    "seekCare": "A sudden painful red eye or abrupt vision loss suggests another process and should be evaluated separately.",
    "urgent": false,
    "related": [
        "corneal-dystrophies",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "corneal-dystrophies",
    "name": "Corneal Dystrophies",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon as a group",
    "careTag": "Usually non-emergency",
    "aliases": [
        "inherited corneal disease",
        "corneal dystrophy"
    ],
    "intro": "Corneal dystrophies are a group of usually inherited conditions that cause characteristic changes in one or more layers of the cornea.",
    "overview": [
        "Corneal dystrophies are a group of usually inherited conditions that cause characteristic changes in one or more layers of the cornea.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Blur or cloudy vision",
        "Glare",
        "Pain in some types",
        "Recurrent erosions in some types",
        "Some types have no symptoms"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Inherited corneal changes",
            "text": "Many dystrophies are linked to genetic changes that affect corneal cells or proteins."
        },
        {
            "title": "Layer-specific disease",
            "text": "Different dystrophies affect the epithelial, stromal, or endothelial layers."
        }
    ],
    "riskFactors": [
        "Family history",
        "Some types become symptomatic at characteristic ages"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "A comprehensive eye examination and slit-lamp evaluation identify the pattern; imaging or genetic information may be useful in selected cases.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Characteristic deposits, folds, or endothelial changes are inspected."
        },
        {
            "title": "Corneal imaging",
            "text": "Thickness, shape, or layer detail may be measured."
        },
        {
            "title": "Family and genetic history",
            "text": "Inherited patterns can help classify some dystrophies."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Some dystrophies cause few symptoms and are monitored."
        },
        {
            "title": "Surface or medical treatment",
            "text": "Lubricants, ointments, or other treatments may help specific types."
        },
        {
            "title": "Laser or corneal surgery",
            "text": "PTK or transplantation may be needed for visually significant disease."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Most corneal dystrophies are not emergencies.",
    "seekCare": "Painful recurrent erosions, rapid vision change, or a markedly red eye should still be evaluated promptly.",
    "urgent": false,
    "related": [
        "fuchs-dystrophy",
        "epithelial-basement-membrane-dystrophy",
        "lattice-corneal-dystrophy",
        "granular-corneal-dystrophy"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Dystrophies",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/corneal-dystrophies"
        }
    ]
},

{
    "id": "corneal-scar",
    "name": "Corneal Scar / Corneal Opacity",
    "category": "dry-eye-cornea",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "corneal opacity",
        "scar on eye",
        "cloudy spot cornea"
    ],
    "intro": "A corneal scar is an area where normally transparent corneal tissue has become less clear after injury, infection, inflammation, or other damage.",
    "overview": [
        "A corneal scar is an area where normally transparent corneal tissue has become less clear after injury, infection, inflammation, or other damage.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Persistent blur",
        "Glare",
        "Haze or cloudy spot",
        "Distortion",
        "Light sensitivity in some cases"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Previous infection",
            "text": "Keratitis or a corneal ulcer can leave scar tissue."
        },
        {
            "title": "Trauma",
            "text": "Deep scratches or penetrating injuries can heal with opacity."
        },
        {
            "title": "Inflammation or surgery",
            "text": "Other corneal damage can also reduce transparency."
        }
    ],
    "riskFactors": [
        "Previous corneal ulcer",
        "Serious eye injury",
        "Previous corneal surgery or inflammation"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Slit-lamp examination shows the location, depth, and density of the opacity and how much it affects the visual axis.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "The scar is examined directly."
        },
        {
            "title": "Refraction",
            "text": "Irregular astigmatism from the scar may be measured."
        },
        {
            "title": "Corneal imaging",
            "text": "Imaging can help characterize deeper or irregular changes."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Optical correction",
            "text": "Glasses or specialty contact lenses may improve vision when the scar distorts the cornea."
        },
        {
            "title": "Laser treatment",
            "text": "Some superficial scars may be treated with PTK."
        },
        {
            "title": "Corneal transplantation",
            "text": "Dense central scars may require transplant surgery when vision is significantly affected."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Most established scars are not emergencies.",
    "seekCare": "A new painful cloudy spot or rapidly worsening haze may represent active corneal disease rather than an old scar and should be evaluated promptly.",
    "urgent": false,
    "related": [
        "corneal-ulcer",
        "keratitis",
        "corneal-dystrophies"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "pterygium",
    "name": "Pterygium",
    "category": "dry-eye-cornea",
    "frequency": "Common in high-UV environments",
    "careTag": "Usually non-emergency",
    "aliases": [
        "surfers eye",
        "growth on cornea",
        "triangle eye growth"
    ],
    "intro": "A pterygium is a noncancerous wing- or triangle-shaped growth of conjunctival tissue that extends onto the cornea.",
    "overview": [
        "A pterygium is a noncancerous wing- or triangle-shaped growth of conjunctival tissue that extends onto the cornea.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Visible growth toward the cornea",
        "Redness or irritation",
        "Dryness",
        "Foreign-body sensation",
        "Astigmatism or blur if it changes corneal shape"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Chronic surface exposure",
            "text": "Long-term ultraviolet light, wind, dust, and dry environments are associated with pterygium formation."
        }
    ],
    "riskFactors": [
        "High ultraviolet exposure",
        "Outdoor work or recreation",
        "Windy, dusty, or dry environments"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "An eye-care professional can usually identify a pterygium by examining its appearance and how far it extends onto the cornea.",
    "exams": [
        {
            "title": "Surface examination",
            "text": "The size and location are documented."
        },
        {
            "title": "Refraction",
            "text": "Astigmatism may be checked if vision is changing."
        },
        {
            "title": "Corneal mapping",
            "text": "Topography may be used when the growth changes corneal shape."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication or irritation control",
            "text": "Treatment may focus on comfort when the growth is small."
        },
        {
            "title": "UV and environmental protection",
            "text": "Sunglasses and protection from wind/dust may reduce irritation."
        },
        {
            "title": "Surgery",
            "text": "Removal may be considered for significant growth, visual effect, or persistent symptoms."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Pterygium usually changes gradually.",
    "seekCare": "A rapidly changing or unusual surface lesion should be examined rather than assumed to be an ordinary pterygium.",
    "urgent": false,
    "related": [
        "pinguecula",
        "dry-eye"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Other Types of Corneal Disease",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/other-types-corneal-disease"
        }
    ]
},

{
    "id": "pinguecula",
    "name": "Pinguecula",
    "category": "dry-eye-cornea",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "yellow spot eye",
        "bump beside cornea",
        "pinguecula eye"
    ],
    "intro": "A pinguecula is a small yellowish or raised area on the conjunctiva near the edge of the cornea.",
    "overview": [
        "A pinguecula is a small yellowish or raised area on the conjunctiva near the edge of the cornea.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Visible yellow or raised spot",
        "Mild irritation",
        "Dryness",
        "Localized redness when inflamed"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Surface degeneration and exposure",
            "text": "Ultraviolet light, wind, dust, and dry environments are associated with these conjunctival changes."
        }
    ],
    "riskFactors": [
        "Outdoor UV exposure",
        "Dry or dusty environments",
        "Increasing age"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The appearance is usually recognizable during a routine eye examination.",
    "exams": [
        {
            "title": "Surface examination",
            "text": "The location, color, and shape are inspected."
        },
        {
            "title": "Corneal and conjunctival assessment",
            "text": "The doctor checks whether another lesion or inflammation is present."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Artificial tears can reduce irritation."
        },
        {
            "title": "Inflammation treatment when needed",
            "text": "Prescription treatment may be used for significant inflammation."
        },
        {
            "title": "Rare surgical removal",
            "text": "Removal is uncommon and reserved for selected cases."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Pinguecula is usually non-urgent.",
    "seekCare": "A lesion that grows quickly, changes appearance, bleeds, or becomes persistently painful should be evaluated.",
    "urgent": false,
    "related": [
        "pterygium",
        "dry-eye"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "neurotrophic-keratitis",
    "name": "Neurotrophic Keratitis",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Can threaten vision",
    "aliases": [
        "numb cornea",
        "low corneal sensation",
        "neurotrophic cornea"
    ],
    "intro": "Neurotrophic keratitis occurs when reduced corneal nerve function interferes with normal surface healing and protection.",
    "overview": [
        "Neurotrophic keratitis occurs when reduced corneal nerve function interferes with normal surface healing and protection.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Persistent surface defect",
        "Blur",
        "Redness",
        "Dryness",
        "Surprisingly little pain despite significant corneal damage in some people"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Reduced corneal sensation",
            "text": "Damaged corneal nerves can weaken blinking, tear reflexes, and epithelial healing."
        },
        {
            "title": "Underlying nerve or eye disease",
            "text": "Herpes infections, surgery, trauma, diabetes, and other neurologic conditions can reduce sensation."
        }
    ],
    "riskFactors": [
        "Previous ocular herpes or shingles",
        "Corneal surgery",
        "Diabetes",
        "Trigeminal nerve injury",
        "Longstanding ocular-surface disease"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "The doctor examines the corneal surface and tests corneal sensation to determine whether reduced nerve function is contributing.",
    "exams": [
        {
            "title": "Corneal sensation testing",
            "text": "Sensation is compared across the cornea."
        },
        {
            "title": "Fluorescein staining",
            "text": "Persistent epithelial defects are mapped."
        },
        {
            "title": "Slit-lamp examination",
            "text": "The depth and severity of surface damage are assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Surface protection",
            "text": "Lubrication and protective measures support healing."
        },
        {
            "title": "Prescription healing therapy",
            "text": "Specialized medicines may be used to promote corneal repair."
        },
        {
            "title": "Protective procedures",
            "text": "Bandage lenses, membrane treatment, or surgery may be used for more advanced disease."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Neurotrophic keratitis can be serious even when pain is mild.",
    "seekCare": "A persistent corneal defect, unexplained blur, or known loss of corneal sensation should be managed by an eye-care professional.",
    "urgent": false,
    "related": [
        "ocular-herpes",
        "herpes-zoster-eye-disease",
        "corneal-ulcer"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "limbal-stem-cell-deficiency",
    "name": "Limbal Stem Cell Deficiency",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Specialist evaluation",
    "aliases": [
        "LSCD",
        "limbal deficiency",
        "stem cells cornea"
    ],
    "intro": "Limbal stem cell deficiency occurs when the stem cells around the edge of the cornea cannot adequately maintain the clear corneal surface.",
    "overview": [
        "Limbal stem cell deficiency occurs when the stem cells around the edge of the cornea cannot adequately maintain the clear corneal surface.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Chronic redness",
        "Light sensitivity",
        "Pain or irritation",
        "Persistent epithelial problems",
        "Blur",
        "Abnormal tissue growing across the cornea"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Limbal stem-cell damage",
            "text": "The cells that normally renew the corneal epithelium are reduced or dysfunctional."
        },
        {
            "title": "Severe injury or chronic disease",
            "text": "Chemical burns, inflammatory disease, multiple surgeries, and some inherited disorders can damage the limbus."
        }
    ],
    "riskFactors": [
        "Severe chemical injury",
        "Multiple corneal surgeries",
        "Stevens–Johnson syndrome",
        "Chronic ocular-surface inflammation",
        "Some inherited conditions"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Diagnosis relies on slit-lamp examination of the limbus and corneal surface, sometimes with specialized imaging or laboratory testing.",
    "exams": [
        {
            "title": "Surface and limbal examination",
            "text": "The transition zone around the cornea is inspected."
        },
        {
            "title": "Fluorescein staining",
            "text": "Abnormal epithelial patterns can be highlighted."
        },
        {
            "title": "Specialized imaging or cell testing",
            "text": "Selected cases may need additional confirmation."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Surface protection",
            "text": "Lubrication and inflammation control help protect remaining surface function."
        },
        {
            "title": "Treat the cause",
            "text": "Ongoing chemical, inflammatory, or eyelid injury must be addressed."
        },
        {
            "title": "Stem-cell or corneal procedures",
            "text": "Advanced cases may require specialized ocular-surface reconstruction."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Limbal stem cell deficiency needs specialist evaluation.",
    "seekCare": "Progressive corneal clouding, persistent surface breakdown, or major pain after chemical injury should be evaluated promptly.",
    "urgent": false,
    "related": [
        "stevens-johnson-ocular-disease",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Corneal Conditions",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions"
        }
    ]
},

{
    "id": "ice-syndrome",
    "name": "Iridocorneal Endothelial (ICE) Syndrome",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Specialist monitoring",
    "aliases": [
        "ICE syndrome",
        "iridocorneal endothelial"
    ],
    "intro": "ICE syndrome is a rare group of disorders in which abnormal corneal endothelial cells spread toward the iris and drainage angle.",
    "overview": [
        "ICE syndrome is a rare group of disorders in which abnormal corneal endothelial cells spread toward the iris and drainage angle.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Corneal swelling or blur",
        "Changes in pupil or iris appearance",
        "Eye-pressure problems",
        "Usually one eye is more involved"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Abnormal endothelial cell behavior",
            "text": "Cells migrate from the cornea toward the iris and drainage structures."
        },
        {
            "title": "Secondary pressure and iris change",
            "text": "The migrating cells can distort the iris and obstruct normal fluid drainage."
        }
    ],
    "riskFactors": [
        "More often diagnosed in adult women",
        "Usually not strongly inherited"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Diagnosis requires slit-lamp examination of the cornea and iris plus assessment of eye pressure and the drainage angle.",
    "exams": [
        {
            "title": "Slit-lamp examination",
            "text": "Corneal and iris changes can be seen."
        },
        {
            "title": "Eye-pressure measurement",
            "text": "Secondary glaucoma can be identified."
        },
        {
            "title": "Gonioscopy and endothelial imaging",
            "text": "The drainage angle and endothelial cells may be evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Corneal swelling treatment",
            "text": "Medication may reduce symptoms from corneal edema."
        },
        {
            "title": "Glaucoma treatment",
            "text": "Pressure-lowering treatment may be needed."
        },
        {
            "title": "Corneal transplantation",
            "text": "Advanced endothelial failure can require transplant surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "ICE syndrome is uncommon and requires professional monitoring.",
    "seekCare": "Sudden pain, redness, halos, or a major vision decrease can indicate a significant pressure rise and should be evaluated urgently.",
    "urgent": false,
    "related": [
        "corneal-edema",
        "glaucoma"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Other Types of Corneal Disease",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/other-types-corneal-disease"
        }
    ]
},

{
    "id": "stevens-johnson-ocular-disease",
    "name": "Stevens–Johnson–Associated Ocular Surface Disease",
    "category": "dry-eye-cornea",
    "frequency": "Rare",
    "careTag": "Can be severe",
    "aliases": [
        "SJS eye",
        "Stevens Johnson eye",
        "toxic epidermal necrolysis eye"
    ],
    "intro": "Stevens–Johnson syndrome can cause severe inflammation and scarring of the eyelids, conjunctiva, tear system, and corneal surface.",
    "overview": [
        "Stevens–Johnson syndrome can cause severe inflammation and scarring of the eyelids, conjunctiva, tear system, and corneal surface.",
        "Because many corneal conditions share symptoms such as pain, redness, watering, light sensitivity, and blur, direct examination is often needed to tell them apart."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>The cornea is the clear front surface of the eye and contributes a large part of the eye’s focusing power. Changes in its surface, shape, clarity, nerves, or cells can affect comfort and vision.</p>",
    "symptoms": [
        "Severe dry eye",
        "Redness",
        "Light sensitivity",
        "Pain",
        "Scarring",
        "Vision loss in advanced ocular disease"
    ],
    "symptomsDetailed": "<h3>Why symptoms overlap</h3><p>Burning, foreign-body sensation, redness, watering, blur, and light sensitivity can appear in several different corneal and ocular-surface conditions. The timing, exposure history, contact-lens use, pain pattern, and examination findings help separate them.</p>",
    "causes": [
        {
            "title": "Severe mucocutaneous inflammation",
            "text": "The systemic reaction can damage the tissues that protect and lubricate the ocular surface."
        },
        {
            "title": "Long-term scarring",
            "text": "Chronic changes can affect eyelid position, tear production, and corneal clarity."
        }
    ],
    "riskFactors": [
        "Known Stevens–Johnson syndrome or toxic epidermal necrolysis history"
    ],
    "causesDetailed": "<h3>Cause matters for treatment</h3><p>Some corneal problems are related to tear-film instability, some to injury or infection, and others to inherited or structural changes. Treatment therefore depends on identifying the underlying process rather than treating every red or painful eye the same way.</p>",
    "diagnosis": "Ocular surface specialists assess the eyelids, conjunctiva, tear production, limbal tissue, and cornea.",
    "exams": [
        {
            "title": "Comprehensive surface examination",
            "text": "Scarring and inflammation are mapped."
        },
        {
            "title": "Tear and eyelid evaluation",
            "text": "Blinking, tear production, and lid position are assessed."
        },
        {
            "title": "Corneal imaging",
            "text": "Additional testing may be used when corneal damage is significant."
        }
    ],
    "diagnosisDetailed": "<h3>Common examination tools</h3><p>A slit lamp lets an eye-care professional inspect the cornea at high magnification. Fluorescein dye, tear testing, corneal mapping, thickness measurements, cultures, or other testing may be added when needed.</p>",
    "treatmentIntro": "Management depends on the cause, severity, and whether vision or deeper corneal tissue is involved.",
    "treatments": [
        {
            "title": "Aggressive lubrication and surface protection",
            "text": "Long-term protection of the ocular surface is often important."
        },
        {
            "title": "Control of inflammation",
            "text": "Prescription therapy may be used depending on disease stage."
        },
        {
            "title": "Specialty lenses or reconstruction",
            "text": "Advanced disease may require scleral lenses or ocular-surface surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment can range widely</h3><p>Management may be as simple as lubrication or environmental changes, or may require prescription medicines, specialty contact lenses, laser treatment, cross-linking, or corneal surgery. The correct option depends on the actual diagnosis.</p>",
    "seekCareHeading": "Known Stevens–Johnson ocular disease deserves specialist care.",
    "seekCare": "New severe redness, pain, light sensitivity, or vision change during an acute systemic reaction requires urgent medical and ophthalmic evaluation.",
    "urgent": true,
    "related": [
        "limbal-stem-cell-deficiency",
        "dry-eye",
        "corneal-scar"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Other Types of Corneal Disease",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/corneal-conditions/other-types-corneal-disease"
        }
    ]
},

{
    "id": "eyelid-tear-conditions",
    "name": "Eyelid, Lash & Tear-Drainage Conditions",
    "category": "eyelids-tears",
    "frequency": "Common as a group",
    "careTag": "Depends on the condition",
    "aliases": [
        "eyelid problems",
        "eyelash problems",
        "tear duct",
        "watery eye"
    ],
    "intro": "The eyelids, eyelashes, oil glands, and tear-drainage system work together to protect and lubricate the eyes.",
    "overview": [
        "The eyelids, eyelashes, oil glands, and tear-drainage system work together to protect and lubricate the eyes.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Eyelid swelling",
        "Crusting or flaking",
        "Eyelid bumps",
        "Tearing",
        "Lashes rubbing the eye",
        "Drooping or abnormal lid position",
        "Twitching"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Eyelid inflammation",
            "text": "Blepharitis, dermatitis, and gland dysfunction can irritate the lid margins."
        },
        {
            "title": "Blocked glands",
            "text": "Oil glands can become obstructed and form styes or chalazia."
        },
        {
            "title": "Position problems",
            "text": "The lid may turn inward, outward, droop, retract, or fail to close."
        },
        {
            "title": "Tear-drainage problems",
            "text": "Blockage or inflammation can make tears overflow or cause swelling near the inner corner."
        }
    ],
    "riskFactors": [
        "Dry eye",
        "Rosacea",
        "Skin disease",
        "Increasing age",
        "Previous eyelid surgery or trauma"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "A direct eye and eyelid examination usually identifies the structure involved and whether the cornea or tear system is being affected.",
    "exams": [
        {
            "title": "Lid and lash examination",
            "text": "The clinician checks position, lashes, bumps, crusts, and gland openings."
        },
        {
            "title": "Slit-lamp examination",
            "text": "Magnification shows the eyelid margins and ocular surface in detail."
        },
        {
            "title": "Tear-drainage assessment",
            "text": "Drainage openings and the tear sac can be examined when watering or inner-corner swelling is present."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Eyelid care",
            "text": "Cleaning, warm compresses, or lubrication may help selected inflammatory or gland problems."
        },
        {
            "title": "Prescription treatment",
            "text": "Antibiotic, anti-inflammatory, or other medication may be used depending on the diagnosis."
        },
        {
            "title": "Eyelid or tear procedures",
            "text": "Some position, drainage, or persistent lesion problems require procedures or surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most eyelid problems are not emergencies.",
    "seekCare": "Rapidly increasing swelling, fever, painful/restricted eye movement, reduced vision, a major injury, or a new drooping eyelid with double vision deserves faster evaluation.",
    "urgent": false,
    "related": [
        "blepharitis",
        "stye",
        "chalazion",
        "tear-duct-obstruction"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        },
        {
            "name": "AAO EyeWiki — Slit Lamp Examination",
            "url": "https://eyewiki.aao.org/Slit_Lamp_Examination"
        }
    ]
},

{
    "id": "stye",
    "name": "Stye (Hordeolum)",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "hordeolum",
        "painful eyelid bump",
        "pimple on eyelid"
    ],
    "intro": "A stye is a tender inflammatory bump involving an eyelid gland, usually near the eyelid margin.",
    "overview": [
        "A stye is a tender inflammatory bump involving an eyelid gland, usually near the eyelid margin.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Painful eyelid bump",
        "Localized redness",
        "Tenderness",
        "Swelling",
        "Sometimes crusting or drainage"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Blocked eyelid gland",
            "text": "A gland becomes obstructed and inflamed."
        },
        {
            "title": "Bacterial contribution",
            "text": "Normal skin bacteria commonly contribute to the inflammatory process."
        }
    ],
    "riskFactors": [
        "Blepharitis",
        "Meibomian-gland dysfunction",
        "History of recurrent styes"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "A clinician can usually identify a stye by examining the bump, its location, and the surrounding eyelid.",
    "exams": [
        {
            "title": "Eyelid examination",
            "text": "The bump and surrounding lid are inspected."
        },
        {
            "title": "Lid-margin examination",
            "text": "Blepharitis and gland blockage may be assessed."
        },
        {
            "title": "Ocular-surface check",
            "text": "The eye itself is checked if swelling or irritation is significant."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Warm compresses",
            "text": "Heat may encourage a blocked gland to drain."
        },
        {
            "title": "Prescription treatment when needed",
            "text": "Medicine may be recommended when there is associated infection or significant inflammation."
        },
        {
            "title": "Drainage",
            "text": "A persistent or unusually large lesion may need an office procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most styes are non-urgent.",
    "seekCare": "Rapidly spreading eyelid redness, fever, worsening swelling, vision change, or pain with eye movement suggests something more than a simple stye.",
    "urgent": false,
    "related": [
        "external-hordeolum",
        "internal-hordeolum",
        "chalazion",
        "blepharitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        },
        {
            "name": "AAO EyeWiki — Stye",
            "url": "https://eyewiki.aao.org/Stye"
        }
    ]
},

{
    "id": "external-hordeolum",
    "name": "External Hordeolum",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "stye lash line",
        "outer stye"
    ],
    "intro": "An external hordeolum is a stye involving a gland near an eyelash follicle at the outer eyelid margin.",
    "overview": [
        "An external hordeolum is a stye involving a gland near an eyelash follicle at the outer eyelid margin.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Tender bump at lash line",
        "Localized redness",
        "Swelling",
        "Possible small pustule"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Blocked lash-associated gland",
            "text": "Inflammation develops in glands near the eyelashes."
        },
        {
            "title": "Bacterial involvement",
            "text": "Skin bacteria often contribute."
        }
    ],
    "riskFactors": [
        "Blepharitis",
        "Recurrent styes"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The diagnosis is usually made from the location and appearance of the tender lash-line bump.",
    "exams": [
        {
            "title": "Lash-line inspection",
            "text": "The lesion is examined where the eyelashes emerge."
        },
        {
            "title": "Lid-margin examination",
            "text": "Associated blepharitis can be identified."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Warm compresses",
            "text": "Gentle heat may promote drainage."
        },
        {
            "title": "Medication when indicated",
            "text": "Prescription treatment may be used for selected cases."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "An external stye is usually non-urgent.",
    "seekCare": "Spreading swelling, fever, or deeper orbital symptoms should be evaluated promptly.",
    "urgent": false,
    "related": [
        "stye",
        "internal-hordeolum",
        "blepharitis"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — Stye",
            "url": "https://eyewiki.aao.org/Stye"
        }
    ]
},

{
    "id": "internal-hordeolum",
    "name": "Internal Hordeolum",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "deep stye",
        "inside eyelid stye"
    ],
    "intro": "An internal hordeolum is a painful inflammatory process involving a meibomian oil gland deeper within the eyelid.",
    "overview": [
        "An internal hordeolum is a painful inflammatory process involving a meibomian oil gland deeper within the eyelid.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Deeper painful eyelid swelling",
        "Tenderness",
        "Redness",
        "Localized lump",
        "Sometimes more diffuse lid swelling"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Blocked meibomian gland",
            "text": "A deeper oil gland becomes obstructed and inflamed."
        },
        {
            "title": "Bacterial involvement",
            "text": "Bacteria can contribute to the inflammation."
        }
    ],
    "riskFactors": [
        "Meibomian-gland dysfunction",
        "Blepharitis",
        "Rosacea"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelid is examined from the outer surface and, when appropriate, from the inner lid surface.",
    "exams": [
        {
            "title": "Eyelid examination",
            "text": "The deeper area of tenderness is identified."
        },
        {
            "title": "Meibomian-gland assessment",
            "text": "Associated gland dysfunction can be evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Warm compresses",
            "text": "Heat may support gland drainage."
        },
        {
            "title": "Prescription medication",
            "text": "Treatment may be considered for significant infection or inflammation."
        },
        {
            "title": "Drainage if persistent",
            "text": "Some lesions require a procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most internal hordeola are non-urgent.",
    "seekCare": "Rapidly worsening swelling, fever, eye-movement pain, or vision change needs prompt evaluation.",
    "urgent": false,
    "related": [
        "stye",
        "chalazion",
        "meibomian-gland-dysfunction"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — Stye",
            "url": "https://eyewiki.aao.org/Stye"
        }
    ]
},

{
    "id": "chalazion",
    "name": "Chalazion",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "painless eyelid lump",
        "blocked eyelid gland",
        "hard eyelid bump"
    ],
    "intro": "A chalazion is a blocked eyelid oil gland that forms a deeper lump, often with less pain than an active stye.",
    "overview": [
        "A chalazion is a blocked eyelid oil gland that forms a deeper lump, often with less pain than an active stye.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Firm eyelid lump",
        "Often little pain",
        "Localized swelling",
        "Can persist for weeks",
        "Large lesions can press on the eye and blur vision"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Blocked meibomian gland",
            "text": "Oil becomes trapped in an eyelid gland."
        },
        {
            "title": "Residual inflammation",
            "text": "A stye can sometimes evolve into a less tender chalazion."
        }
    ],
    "riskFactors": [
        "Meibomian-gland dysfunction",
        "Blepharitis",
        "Rosacea",
        "History of recurrent chalazia"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "A clinician examines the location, tenderness, duration, and appearance of the eyelid lump.",
    "exams": [
        {
            "title": "Eyelid inspection and palpation",
            "text": "The lesion is examined for size and position."
        },
        {
            "title": "Lid-margin examination",
            "text": "Associated gland or blepharitis problems may be checked."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Warm compresses",
            "text": "Heat may help the blocked gland drain."
        },
        {
            "title": "Injection or drainage",
            "text": "Persistent lesions may be treated in the office."
        },
        {
            "title": "Evaluation of recurrent lesions",
            "text": "A repeatedly returning or unusual lesion may need closer assessment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most chalazia are non-urgent.",
    "seekCare": "A lesion that repeatedly returns in the same location, changes appearance, causes lash loss, bleeds, or does not behave like an ordinary chalazion should be examined.",
    "urgent": false,
    "related": [
        "stye",
        "meibomian-gland-dysfunction",
        "blepharitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "blepharitis",
    "name": "Blepharitis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "crusty eyelashes",
        "inflamed eyelids",
        "itchy lid margin",
        "flakes lashes"
    ],
    "intro": "Blepharitis is inflammation of the eyelid margins that can make the lids red, swollen, irritated, itchy, and crusty.",
    "overview": [
        "Blepharitis is inflammation of the eyelid margins that can make the lids red, swollen, irritated, itchy, and crusty.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Red or swollen eyelids",
        "Itching",
        "Burning or stinging",
        "Crusts or flakes on lashes",
        "Watery or dry eyes",
        "Foreign-body sensation"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Anterior lid-margin inflammation",
            "text": "Bacteria, dandruff-like skin changes, allergy, or mites can affect the lash line."
        },
        {
            "title": "Posterior gland dysfunction",
            "text": "Blocked or irritated meibomian glands can inflame the inner lid margin."
        }
    ],
    "riskFactors": [
        "Dandruff or seborrheic skin",
        "Rosacea",
        "Oily skin",
        "Allergies",
        "Meibomian-gland dysfunction"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelids, lashes, gland openings, tear film, and corneal surface are examined under magnification.",
    "exams": [
        {
            "title": "Lid-margin inspection",
            "text": "Crusts, redness, lash debris, and gland openings are examined."
        },
        {
            "title": "Tear-film assessment",
            "text": "Blepharitis can destabilize the tear film."
        },
        {
            "title": "Corneal examination",
            "text": "The surface is checked when irritation is significant."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Regular eyelid hygiene",
            "text": "Keeping the lid margins clean is a major part of long-term control."
        },
        {
            "title": "Warm compresses",
            "text": "Heat may help loosen debris and improve oil-gland flow."
        },
        {
            "title": "Prescription treatment",
            "text": "Antibiotic, anti-inflammatory, or other treatment may be used for selected causes."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Blepharitis is usually non-urgent but often chronic.",
    "seekCare": "Significant pain, a corneal problem, sudden vision change, or severe swelling deserves evaluation for complications or another condition.",
    "urgent": false,
    "related": [
        "anterior-blepharitis",
        "posterior-blepharitis",
        "demodex-blepharitis",
        "meibomian-gland-dysfunction"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "anterior-blepharitis",
    "name": "Anterior Blepharitis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "lash line blepharitis",
        "front eyelid blepharitis",
        "crust lashes"
    ],
    "intro": "Anterior blepharitis affects the front edge of the eyelid where the eyelashes attach.",
    "overview": [
        "Anterior blepharitis affects the front edge of the eyelid where the eyelashes attach.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Lash-base crusts or flakes",
        "Itching",
        "Red lid margins",
        "Burning",
        "Irritated eyes",
        "Possible lash changes"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Bacterial overgrowth",
            "text": "Excess bacteria at the lid margin can contribute."
        },
        {
            "title": "Seborrheic skin disease",
            "text": "Dandruff-like skin changes can affect the eyelashes and lid margin."
        },
        {
            "title": "Demodex or allergy",
            "text": "Mites or allergic processes can contribute in some people."
        }
    ],
    "riskFactors": [
        "Dandruff",
        "Oily skin",
        "Allergies",
        "Demodex infestation"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The lash bases and anterior lid margins are inspected under magnification.",
    "exams": [
        {
            "title": "Lash examination",
            "text": "Flakes, crusts, collarettes, and lash direction are assessed."
        },
        {
            "title": "Corneal and tear-film check",
            "text": "Associated dry-eye or surface irritation is evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lid hygiene",
            "text": "Regular cleaning helps control crust and debris."
        },
        {
            "title": "Cause-specific treatment",
            "text": "Medication or mite-directed treatment may be considered when appropriate."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Anterior blepharitis is usually non-urgent.",
    "seekCare": "A painful red eye or reduced vision suggests involvement beyond simple lid-margin inflammation.",
    "urgent": false,
    "related": [
        "blepharitis",
        "demodex-blepharitis",
        "eyelid-dermatitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "posterior-blepharitis",
    "name": "Posterior Blepharitis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "MGD blepharitis",
        "back eyelid blepharitis",
        "oil gland blepharitis"
    ],
    "intro": "Posterior blepharitis affects the inner eyelid margin and is closely related to meibomian-gland dysfunction.",
    "overview": [
        "Posterior blepharitis affects the inner eyelid margin and is closely related to meibomian-gland dysfunction.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Burning",
        "Dryness",
        "Red lid margins",
        "Fluctuating blur",
        "Foamy tears",
        "Gland blockage"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Meibomian-gland dysfunction",
            "text": "Oil glands become blocked or produce abnormal secretions."
        },
        {
            "title": "Rosacea or skin disease",
            "text": "Chronic skin inflammation can affect the eyelid glands."
        }
    ],
    "riskFactors": [
        "Rosacea",
        "Meibomian-gland dysfunction",
        "Seborrheic skin conditions"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The inner lid margin and meibomian gland openings are examined under magnification.",
    "exams": [
        {
            "title": "Meibomian-gland examination",
            "text": "The gland openings and secretions are evaluated."
        },
        {
            "title": "Tear-film testing",
            "text": "Evaporation and tear stability may be assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Warm compresses and lid care",
            "text": "Treatment often targets oil-gland flow."
        },
        {
            "title": "Prescription treatment",
            "text": "Medication may be recommended for inflammation or associated rosacea."
        },
        {
            "title": "Office-based gland treatment",
            "text": "Selected patients may benefit from procedures aimed at obstructed glands."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Posterior blepharitis is usually non-urgent.",
    "seekCare": "Significant pain, photophobia, or reduced vision should be evaluated for corneal involvement.",
    "urgent": false,
    "related": [
        "blepharitis",
        "meibomian-gland-dysfunction",
        "ocular-rosacea"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "demodex-blepharitis",
    "name": "Demodex Blepharitis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyelash mites",
        "Demodex eye",
        "collarettes lashes"
    ],
    "intro": "Demodex blepharitis is eyelid-margin inflammation associated with microscopic Demodex mites living around eyelash follicles.",
    "overview": [
        "Demodex blepharitis is eyelid-margin inflammation associated with microscopic Demodex mites living around eyelash follicles.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Itchy eyelids",
        "Irritation",
        "Red lid margins",
        "Lash debris or collarettes",
        "Dry-eye symptoms",
        "Recurrent inflammation"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Demodex mites",
            "text": "An increased mite population can irritate follicles and contribute to lid-margin inflammation."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Chronic blepharitis",
        "Rosacea"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The lashes are examined for characteristic debris around their bases and other signs of chronic blepharitis.",
    "exams": [
        {
            "title": "Magnified lash inspection",
            "text": "Collarettes and follicle changes are assessed."
        },
        {
            "title": "Surface examination",
            "text": "Associated dry eye and corneal irritation can be evaluated."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Targeted eyelid treatment",
            "text": "Treatment may include therapies specifically directed at Demodex."
        },
        {
            "title": "Lid hygiene",
            "text": "Ongoing eyelid care may help manage associated inflammation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Demodex blepharitis is usually non-urgent.",
    "seekCare": "Persistent symptoms or corneal irritation should be professionally evaluated.",
    "urgent": false,
    "related": [
        "blepharitis",
        "anterior-blepharitis",
        "ocular-rosacea"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "eyelid-dermatitis",
    "name": "Eyelid Dermatitis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eczema eyelids",
        "flaky eyelid skin",
        "itchy eyelid rash"
    ],
    "intro": "Eyelid dermatitis is inflammation of the thin eyelid skin that can cause redness, itching, scaling, or swelling.",
    "overview": [
        "Eyelid dermatitis is inflammation of the thin eyelid skin that can cause redness, itching, scaling, or swelling.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Itchy eyelid skin",
        "Redness",
        "Flaking or scaling",
        "Swelling",
        "Burning skin"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Eczema or atopic inflammation",
            "text": "Sensitive skin may become chronically inflamed."
        },
        {
            "title": "Irritant or allergic exposure",
            "text": "Cosmetics, skin products, drops, or environmental substances can trigger dermatitis."
        }
    ],
    "riskFactors": [
        "Eczema",
        "Allergies",
        "Sensitive skin",
        "New cosmetics or facial products"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelid skin and ocular surface are examined, and exposure history can help identify a likely trigger.",
    "exams": [
        {
            "title": "Skin inspection",
            "text": "The distribution and appearance of the rash are assessed."
        },
        {
            "title": "Ocular-surface check",
            "text": "The eye is examined when irritation extends beyond the skin."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Avoid the trigger",
            "text": "Suspected irritants or allergens may need to be discontinued."
        },
        {
            "title": "Skin-directed treatment",
            "text": "A clinician may recommend safe short-term anti-inflammatory or other skin treatment for the eyelid area."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most eyelid dermatitis is non-urgent.",
    "seekCare": "Severe swelling, eye pain, vision change, or signs of infection deserve professional evaluation.",
    "urgent": false,
    "related": [
        "contact-eyelid-dermatitis",
        "blepharitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "contact-eyelid-dermatitis",
    "name": "Contact Dermatitis of the Eyelids",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "makeup allergy eyelid",
        "eye cream rash",
        "eyelid allergy"
    ],
    "intro": "Contact eyelid dermatitis is an irritated or allergic skin reaction caused by something that touches the eyelids directly or is transferred there by the hands.",
    "overview": [
        "Contact eyelid dermatitis is an irritated or allergic skin reaction caused by something that touches the eyelids directly or is transferred there by the hands.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Itching",
        "Red swollen lids",
        "Dry or scaly skin",
        "Burning",
        "Symptoms after a new product"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Allergic contact reaction",
            "text": "The immune system reacts to a particular substance."
        },
        {
            "title": "Irritant reaction",
            "text": "A product can directly irritate sensitive eyelid skin."
        }
    ],
    "riskFactors": [
        "New makeup",
        "Skin-care products",
        "Nail products transferred by touch",
        "Eye drops",
        "Fragrances or preservatives"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "History of recent products and the appearance of the eyelid skin help identify a contact reaction; persistent cases may need dermatologic testing.",
    "exams": [
        {
            "title": "Exposure review",
            "text": "New eye, face, hair, or nail products are considered."
        },
        {
            "title": "Skin examination",
            "text": "The pattern of redness and scaling is inspected."
        },
        {
            "title": "Patch testing when needed",
            "text": "Dermatology testing can identify specific allergens."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Remove the trigger",
            "text": "Avoidance is central when a specific product is responsible."
        },
        {
            "title": "Short-term medical treatment",
            "text": "A clinician may prescribe appropriate anti-inflammatory therapy for delicate eyelid skin."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most contact dermatitis is non-urgent.",
    "seekCare": "Marked swelling with fever, pain, vision changes, or painful eye movement is not typical simple dermatitis.",
    "urgent": false,
    "related": [
        "eyelid-dermatitis",
        "allergic-conjunctivitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "ocular-rosacea",
    "name": "Ocular Rosacea",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "rosacea eyes",
        "red eyelids rosacea",
        "ocular rosacea dry eye"
    ],
    "intro": "Ocular rosacea is inflammation affecting the eyelids and eye surface in association with rosacea, sometimes even when facial skin symptoms are mild.",
    "overview": [
        "Ocular rosacea is inflammation affecting the eyelids and eye surface in association with rosacea, sometimes even when facial skin symptoms are mild.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Burning or stinging",
        "Red or irritated lid margins",
        "Dry eye",
        "Recurrent styes or chalazia",
        "Light sensitivity",
        "Fluctuating blur"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Chronic inflammatory skin disease",
            "text": "Rosacea can affect the eyelid margins and meibomian glands."
        },
        {
            "title": "Oil-gland dysfunction",
            "text": "Altered meibomian secretions can destabilize the tear film."
        }
    ],
    "riskFactors": [
        "Facial rosacea",
        "Meibomian-gland dysfunction",
        "Recurrent blepharitis"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelid margins, meibomian glands, tear film, and cornea are examined, along with relevant skin findings.",
    "exams": [
        {
            "title": "Lid-margin examination",
            "text": "Redness, telangiectasia, and gland blockage may be seen."
        },
        {
            "title": "Tear-film evaluation",
            "text": "Evaporative dry eye is assessed."
        },
        {
            "title": "Corneal examination",
            "text": "More significant ocular rosacea can affect the cornea."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lid and gland care",
            "text": "Treatment often focuses on meibomian-gland function."
        },
        {
            "title": "Prescription therapy",
            "text": "Topical or oral medication may be used depending on severity."
        },
        {
            "title": "Dry-eye treatment",
            "text": "Lubrication or other tear-film therapy may be added."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Ocular rosacea is usually managed non-urgently.",
    "seekCare": "Increasing pain, photophobia, or reduced vision can indicate corneal involvement and deserves prompt evaluation.",
    "urgent": false,
    "related": [
        "posterior-blepharitis",
        "meibomian-gland-dysfunction",
        "dry-eye"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ],
    "categories": [
        "eyelids-tears",
        "dry-eye-cornea"
    ]
},

{
    "id": "ptosis",
    "name": "Ptosis (Drooping Eyelid)",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "New ptosis can be urgent",
    "aliases": [
        "droopy eyelid",
        "eyelid droop",
        "upper lid low"
    ],
    "intro": "Ptosis means the upper eyelid sits lower than expected and may partly cover the pupil.",
    "overview": [
        "Ptosis means the upper eyelid sits lower than expected and may partly cover the pupil.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Drooping upper lid",
        "One eye may look smaller",
        "Forehead lifting to raise the lid",
        "Head tilting back",
        "Vision blocked if severe"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Age-related tendon stretching",
            "text": "The tissue that lifts the eyelid can stretch or detach over time."
        },
        {
            "title": "Congenital muscle development",
            "text": "Some ptosis is present from birth."
        },
        {
            "title": "Nerve, muscle, surgery, or trauma causes",
            "text": "Acquired ptosis can have several different causes."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Previous eye surgery",
        "Neurologic or muscle disease",
        "Congenital history"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelid height, strength, pupils, eye movement, and vision are evaluated to determine the likely type and whether a neurologic cause is possible.",
    "exams": [
        {
            "title": "Eyelid measurements",
            "text": "Lid height and lifting function are measured."
        },
        {
            "title": "Pupil and eye-movement examination",
            "text": "These findings help identify neurologic patterns."
        },
        {
            "title": "Visual-field testing",
            "text": "Testing may show whether the lid blocks superior vision."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Mild stable ptosis may not need treatment."
        },
        {
            "title": "Treat the underlying cause",
            "text": "Neurologic or muscle disease may require medical treatment."
        },
        {
            "title": "Eyelid surgery",
            "text": "Surgery can raise the lid when appropriate."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Longstanding ptosis can often be evaluated routinely.",
    "seekCare": "A new drooping eyelid—especially with double vision, an abnormal pupil, severe headache, weakness, or other neurologic symptoms—needs prompt assessment.",
    "urgent": false,
    "related": [
        "congenital-ptosis",
        "ocular-myasthenia",
        "third-nerve-palsy"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "congenital-ptosis",
    "name": "Congenital Ptosis",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "born with droopy eyelid",
        "child droopy eyelid"
    ],
    "intro": "Congenital ptosis is upper-eyelid drooping that is present from birth or early childhood.",
    "overview": [
        "Congenital ptosis is upper-eyelid drooping that is present from birth or early childhood.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Drooping upper lid",
        "Head tilting back",
        "Eyebrow lifting",
        "Possible blocked visual axis",
        "Possible amblyopia risk"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Underdeveloped eyelid-lifting muscle",
            "text": "The levator muscle may not function normally from birth."
        }
    ],
    "riskFactors": [
        "Present since infancy",
        "May occur alone or with other developmental eye conditions"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The child’s eyelid position, vision, refractive error, and eye alignment are evaluated because visual development can be affected.",
    "exams": [
        {
            "title": "Eyelid measurements",
            "text": "The amount of droop and muscle function are measured."
        },
        {
            "title": "Vision and refraction",
            "text": "Amblyopia and refractive error are checked."
        },
        {
            "title": "Strabismus examination",
            "text": "Eye alignment is assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Mild cases that do not threaten vision may be monitored."
        },
        {
            "title": "Amblyopia treatment",
            "text": "Visual-development problems are treated when present."
        },
        {
            "title": "Surgery",
            "text": "Surgery may be needed when the lid blocks vision or causes significant functional problems."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Congenital ptosis should be evaluated during childhood.",
    "seekCare": "A drooping lid that is new rather than longstanding belongs in the acquired-ptosis pathway.",
    "urgent": false,
    "related": [
        "ptosis",
        "amblyopia"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "dermatochalasis",
    "name": "Dermatochalasis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "excess eyelid skin",
        "heavy eyelids",
        "hooded eyelids"
    ],
    "intro": "Dermatochalasis is excess or loose eyelid skin, most often involving the upper lids as part of age-related tissue change.",
    "overview": [
        "Dermatochalasis is excess or loose eyelid skin, most often involving the upper lids as part of age-related tissue change.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Heavy upper lids",
        "Excess skin fold",
        "Upper visual-field obstruction in more advanced cases",
        "Cosmetic or functional concern"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Age-related tissue changes",
            "text": "Skin and supporting tissues become looser with time."
        },
        {
            "title": "Individual anatomy",
            "text": "The amount and distribution differ between people."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Family/anatomic tendency"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelids are examined to distinguish excess skin from true ptosis and to determine whether vision is being blocked.",
    "exams": [
        {
            "title": "Eyelid examination",
            "text": "Skin position and true lid margin height are compared."
        },
        {
            "title": "Visual-field testing",
            "text": "Testing may document superior-field obstruction when function is affected."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation",
            "text": "No treatment is required if the excess skin does not cause functional concern."
        },
        {
            "title": "Blepharoplasty",
            "text": "Surgery can remove excess eyelid skin when appropriate."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Dermatochalasis is non-urgent.",
    "seekCare": "Rapidly developing swelling or new neurologic-type drooping is different from ordinary age-related excess skin.",
    "urgent": false,
    "related": [
        "ptosis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "entropion",
    "name": "Entropion",
    "category": "eyelids-tears",
    "frequency": "Common in older adults",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyelid turns in",
        "lashes rub eye",
        "inward eyelid"
    ],
    "intro": "Entropion occurs when the eyelid margin turns inward so the eyelashes or lid skin can rub against the eye.",
    "overview": [
        "Entropion occurs when the eyelid margin turns inward so the eyelashes or lid skin can rub against the eye.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Foreign-body sensation",
        "Tearing",
        "Redness",
        "Lashes rubbing the eye",
        "Light sensitivity",
        "Corneal irritation"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Age-related eyelid laxity",
            "text": "Lower-lid support can loosen with age."
        },
        {
            "title": "Scarring",
            "text": "Previous inflammation, injury, or surgery can pull the lid inward."
        },
        {
            "title": "Spasm or congenital anatomy",
            "text": "Other forms occur through different mechanisms."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Previous eyelid scarring",
        "Trauma or surgery"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The eyelid position, lash contact, and corneal surface are examined directly.",
    "exams": [
        {
            "title": "Lid-position examination",
            "text": "The direction and stability of the eyelid margin are assessed."
        },
        {
            "title": "Corneal staining",
            "text": "Fluorescein can show scratches from lashes."
        },
        {
            "title": "Lash assessment",
            "text": "Trichiasis or other lash abnormalities are distinguished from true entropion."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Surface protection may temporarily reduce irritation."
        },
        {
            "title": "Temporary lid-position measures",
            "text": "Some short-term treatments can protect the cornea while definitive care is arranged."
        },
        {
            "title": "Eyelid surgery",
            "text": "Surgical repair is often the definitive treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Entropion is usually not an emergency, but the cornea needs protection.",
    "seekCare": "Increasing pain, photophobia, or reduced vision can mean the lashes are damaging the cornea and should be evaluated promptly.",
    "urgent": false,
    "related": [
        "trichiasis",
        "ectropion",
        "exposure-keratopathy"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — Entropion",
            "url": "https://eyewiki.aao.org/Entropion"
        }
    ]
},

{
    "id": "ectropion",
    "name": "Ectropion",
    "category": "eyelids-tears",
    "frequency": "Common in older adults",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyelid turns out",
        "outward lower lid",
        "watering ectropion"
    ],
    "intro": "Ectropion occurs when the eyelid margin turns outward and no longer rests normally against the eye.",
    "overview": [
        "Ectropion occurs when the eyelid margin turns outward and no longer rests normally against the eye.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Overflow tearing",
        "Dryness",
        "Redness",
        "Irritation",
        "Visible outward-turning lower lid",
        "Exposure symptoms"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Age-related eyelid laxity",
            "text": "The lower lid commonly loosens with age."
        },
        {
            "title": "Facial nerve weakness",
            "text": "Reduced muscle tone can allow the lid to turn outward."
        },
        {
            "title": "Scarring or surgery",
            "text": "Skin or tissue shortening can pull the eyelid away from the eye."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Facial nerve palsy",
        "Previous eyelid surgery or scarring"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The clinician checks lid position, tear-drainage opening position, blink function, and corneal exposure.",
    "exams": [
        {
            "title": "Lid-position examination",
            "text": "The degree and cause of outward turning are assessed."
        },
        {
            "title": "Punctum examination",
            "text": "The drainage opening may rotate away from the tear lake."
        },
        {
            "title": "Corneal examination",
            "text": "Exposure-related surface damage is checked."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Artificial tears or ointment may temporarily protect the surface."
        },
        {
            "title": "Treat the underlying cause",
            "text": "Facial nerve or scarring problems may need separate management."
        },
        {
            "title": "Eyelid surgery",
            "text": "Surgical repair is commonly used for persistent functional ectropion."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Ectropion is usually non-urgent.",
    "seekCare": "Increasing corneal pain, light sensitivity, or reduced vision suggests exposure-related damage and needs prompt evaluation.",
    "urgent": false,
    "related": [
        "entropion",
        "tear-duct-obstruction",
        "exposure-keratopathy"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — Ectropion",
            "url": "https://eyewiki.aao.org/Ectropion"
        }
    ]
},

{
    "id": "trichiasis",
    "name": "Trichiasis",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyelash rubbing eye",
        "lashes grow inward",
        "inward eyelashes"
    ],
    "intro": "Trichiasis means one or more eyelashes grow or point toward the eye and rub against the ocular surface.",
    "overview": [
        "Trichiasis means one or more eyelashes grow or point toward the eye and rub against the ocular surface.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Scratchy or foreign-body sensation",
        "Tearing",
        "Redness",
        "Light sensitivity",
        "Visible inward-pointing lashes"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Lash-direction change",
            "text": "Individual lashes can turn inward even when the eyelid itself is positioned normally."
        },
        {
            "title": "Scarring or chronic inflammation",
            "text": "Blepharitis, trauma, or scarring can alter lash growth."
        }
    ],
    "riskFactors": [
        "Chronic blepharitis",
        "Eyelid scarring",
        "Previous trauma or surgery"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The lashes, eyelid margin, and cornea are examined to identify which lashes are touching the eye and whether damage has occurred.",
    "exams": [
        {
            "title": "Lash inspection",
            "text": "Misdirected lashes are identified."
        },
        {
            "title": "Corneal staining",
            "text": "The doctor checks for scratches or chronic surface injury."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lash removal",
            "text": "Individual offending lashes can be removed temporarily."
        },
        {
            "title": "Follicle-directed treatment",
            "text": "Repeatedly misdirected lashes may be treated at the follicle."
        },
        {
            "title": "Eyelid repair",
            "text": "Associated entropion or scarring may require surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Trichiasis is usually non-urgent but can damage the cornea.",
    "seekCare": "Pain, persistent photophobia, or reduced vision can indicate corneal injury and deserves prompt examination.",
    "urgent": false,
    "related": [
        "entropion",
        "distichiasis",
        "corneal-abrasion"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — Entropion",
            "url": "https://eyewiki.aao.org/Entropion"
        }
    ]
},

{
    "id": "distichiasis",
    "name": "Distichiasis",
    "category": "eyelids-tears",
    "frequency": "Rare",
    "careTag": "Usually non-emergency",
    "aliases": [
        "extra eyelashes",
        "second row lashes"
    ],
    "intro": "Distichiasis is an extra row or abnormal set of eyelashes arising from the eyelid margin, sometimes pointing toward the eye.",
    "overview": [
        "Distichiasis is an extra row or abnormal set of eyelashes arising from the eyelid margin, sometimes pointing toward the eye.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Extra lashes",
        "Foreign-body sensation",
        "Tearing",
        "Redness",
        "Corneal irritation"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Congenital lash development",
            "text": "Some people are born with an extra row of lashes."
        },
        {
            "title": "Acquired lid-margin changes",
            "text": "Scarring or chronic inflammation can occasionally create abnormal lash growth."
        }
    ],
    "riskFactors": [
        "Congenital history",
        "Eyelid scarring or chronic inflammation"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "Magnified eyelid examination distinguishes distichiasis from ordinary trichiasis and checks whether lashes touch the cornea.",
    "exams": [
        {
            "title": "Lash and gland-opening inspection",
            "text": "The origin of the extra lashes is examined."
        },
        {
            "title": "Corneal examination",
            "text": "Surface injury is assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Non-rubbing lashes may not need treatment."
        },
        {
            "title": "Follicle treatment",
            "text": "Problem lashes can be removed or treated at their follicles."
        },
        {
            "title": "Surgery in extensive cases",
            "text": "More widespread abnormalities may need eyelid surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Distichiasis is generally non-urgent.",
    "seekCare": "Corneal pain or vision change from lash contact should be evaluated promptly.",
    "urgent": false,
    "related": [
        "trichiasis",
        "entropion"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "lagophthalmos",
    "name": "Lagophthalmos",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye won't close",
        "sleep eyes open",
        "incomplete eyelid closure"
    ],
    "intro": "Lagophthalmos means the eyelids cannot close completely, leaving part of the eye exposed.",
    "overview": [
        "Lagophthalmos means the eyelids cannot close completely, leaving part of the eye exposed.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Dry or burning eye",
        "Symptoms after sleep",
        "Foreign-body sensation",
        "Redness",
        "Blur",
        "Someone notices the eye remains partly open during sleep"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Facial nerve weakness",
            "text": "The eyelid-closing muscle may not receive normal nerve input."
        },
        {
            "title": "Eyelid position or scarring",
            "text": "Surgery, trauma, or lid retraction can prevent full closure."
        },
        {
            "title": "Prominent eye position",
            "text": "Proptosis can make complete closure more difficult."
        }
    ],
    "riskFactors": [
        "Facial nerve palsy",
        "Thyroid eye disease",
        "Eyelid surgery",
        "Trauma"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The clinician observes blinking and forced closure and examines the exposed cornea for dryness or injury.",
    "exams": [
        {
            "title": "Closure assessment",
            "text": "The amount of exposed eye is measured."
        },
        {
            "title": "Corneal staining",
            "text": "Fluorescein can reveal exposure damage."
        },
        {
            "title": "Facial nerve and lid evaluation",
            "text": "The cause of incomplete closure is assessed."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lubrication and moisture protection",
            "text": "The cornea can be protected while the cause is addressed."
        },
        {
            "title": "Treating the underlying cause",
            "text": "Nerve, thyroid, or scarring problems may need separate management."
        },
        {
            "title": "Eyelid procedures",
            "text": "Surgery or temporary procedures may improve closure in more severe cases."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Lagophthalmos should be evaluated because the cornea can dry out.",
    "seekCare": "Increasing pain, photophobia, or reduced vision can indicate exposure keratopathy and needs prompt care.",
    "urgent": false,
    "related": [
        "exposure-keratopathy",
        "ectropion",
        "thyroid-eye-disease"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ],
    "categories": [
        "eyelids-tears",
        "dry-eye-cornea"
    ]
},

{
    "id": "eyelid-retraction",
    "name": "Eyelid Retraction",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "upper lid too high",
        "lower lid too low",
        "wide eyes thyroid"
    ],
    "intro": "Eyelid retraction occurs when the upper or lower eyelid sits farther away from the eye than expected, exposing more of the eye surface.",
    "overview": [
        "Eyelid retraction occurs when the upper or lower eyelid sits farther away from the eye than expected, exposing more of the eye surface.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Wide-eyed appearance",
        "Visible white above or below the iris",
        "Dryness",
        "Irritation",
        "Difficulty closing the eye",
        "Tearing"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Thyroid eye disease",
            "text": "Thyroid-associated changes can retract the eyelids."
        },
        {
            "title": "Surgery or scarring",
            "text": "Previous eyelid or orbital surgery can alter lid position."
        },
        {
            "title": "Neurologic or mechanical causes",
            "text": "Other less common causes can affect lid position."
        }
    ],
    "riskFactors": [
        "Thyroid disease",
        "Previous eyelid surgery",
        "Orbital disease"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "Lid position, eye prominence, closure, eye movement, and the corneal surface are evaluated.",
    "exams": [
        {
            "title": "Eyelid measurements",
            "text": "The lid position relative to the cornea is documented."
        },
        {
            "title": "Corneal examination",
            "text": "Exposure damage is assessed."
        },
        {
            "title": "Orbital/thyroid evaluation",
            "text": "Additional testing may be needed when thyroid eye disease is suspected."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Lubrication",
            "text": "Surface protection can reduce exposure symptoms."
        },
        {
            "title": "Treat the underlying disease",
            "text": "Thyroid or orbital disease may require medical treatment."
        },
        {
            "title": "Eyelid surgery",
            "text": "Persistent retraction can be surgically corrected."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Eyelid retraction is often non-urgent.",
    "seekCare": "Vision changes, severe exposure symptoms, new double vision, or significant eye prominence deserve prompt evaluation.",
    "urgent": false,
    "related": [
        "lagophthalmos",
        "thyroid-eye-disease",
        "exposure-keratopathy"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "eyelid-myokymia",
    "name": "Eyelid Myokymia",
    "category": "eyelids-tears",
    "frequency": "Very common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eye twitch",
        "eyelid twitch",
        "lid jumping"
    ],
    "intro": "Eyelid myokymia is a common fine twitching of part of an eyelid, often temporary and harmless.",
    "overview": [
        "Eyelid myokymia is a common fine twitching of part of an eyelid, often temporary and harmless.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Small repetitive eyelid twitch",
        "Usually one eyelid",
        "Comes and goes",
        "Often more noticeable with fatigue or stress"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Temporary muscle irritability",
            "text": "The eyelid muscle can twitch intermittently without a serious neurologic problem."
        }
    ],
    "riskFactors": [
        "Fatigue",
        "Stress",
        "High caffeine intake",
        "Eye strain"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "Typical myokymia is often recognized from the history and appearance; persistent or unusual movement patterns may need a broader examination.",
    "exams": [
        {
            "title": "Eyelid observation",
            "text": "The pattern and distribution of twitching are assessed."
        },
        {
            "title": "Neurologic examination when needed",
            "text": "Movement involving more of the face may require additional evaluation."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Reduce contributing triggers",
            "text": "Rest and reducing common triggers may help."
        },
        {
            "title": "Observation",
            "text": "Most isolated eyelid myokymia resolves on its own."
        },
        {
            "title": "Additional treatment",
            "text": "Persistent severe cases may be treated after professional evaluation."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Ordinary eyelid myokymia is usually harmless.",
    "seekCare": "Twitching that spreads to the same side of the face, causes forceful eye closure, or occurs with weakness or other neurologic symptoms should be evaluated.",
    "urgent": false,
    "related": [
        "blepharospasm",
        "hemifacial-spasm"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "blepharospasm",
    "name": "Benign Essential Blepharospasm",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "eyes squeeze shut",
        "involuntary blinking",
        "both eyelids spasm"
    ],
    "intro": "Benign essential blepharospasm causes involuntary, often forceful squeezing or closing of both eyelids.",
    "overview": [
        "Benign essential blepharospasm causes involuntary, often forceful squeezing or closing of both eyelids.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Frequent blinking",
        "Involuntary squeezing of both eyes",
        "Light sensitivity",
        "Difficulty keeping eyes open",
        "Symptoms may worsen with fatigue or bright light"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Focal dystonia",
            "text": "The nervous system produces involuntary contractions of the eyelid-closing muscles."
        }
    ],
    "riskFactors": [
        "Usually begins in adulthood",
        "Light sensitivity can aggravate symptoms"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The movement pattern and neurologic examination help distinguish blepharospasm from ordinary twitching and other facial spasms.",
    "exams": [
        {
            "title": "Movement observation",
            "text": "Frequency, symmetry, and force of eyelid closure are assessed."
        },
        {
            "title": "Eye-surface examination",
            "text": "Dry eye or irritation that may worsen blinking is checked."
        },
        {
            "title": "Neurologic evaluation",
            "text": "Other movement disorders can be considered when the pattern is atypical."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Botulinum toxin injections",
            "text": "Targeted injections are commonly used to reduce involuntary contractions."
        },
        {
            "title": "Surface treatment",
            "text": "Dry-eye management may reduce additional irritation."
        },
        {
            "title": "Surgery in selected cases",
            "text": "Severe refractory cases may require surgical treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Blepharospasm is usually non-emergent but can become functionally disabling.",
    "seekCare": "New spasms with other neurologic symptoms should be evaluated for another cause.",
    "urgent": false,
    "related": [
        "eyelid-myokymia",
        "hemifacial-spasm"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "hemifacial-spasm",
    "name": "Hemifacial Spasm",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "half face twitch",
        "one side face spasm",
        "eye cheek twitch"
    ],
    "intro": "Hemifacial spasm causes involuntary contractions on one side of the face and often begins around the eye.",
    "overview": [
        "Hemifacial spasm causes involuntary contractions on one side of the face and often begins around the eye.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "One-sided eyelid twitching",
        "Same-side cheek or mouth movement",
        "Intermittent facial contractions",
        "Eye may squeeze closed"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Facial nerve irritation",
            "text": "The facial nerve can become abnormally excitable, sometimes because a nearby blood vessel contacts it."
        },
        {
            "title": "Other nerve causes",
            "text": "Less commonly, another structural or neurologic process can affect the facial nerve."
        }
    ],
    "riskFactors": [
        "Usually begins in adulthood"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The distribution of facial movement is examined, and neurologic imaging may be considered to evaluate the facial nerve.",
    "exams": [
        {
            "title": "Neurologic and facial examination",
            "text": "The clinician observes which muscles contract."
        },
        {
            "title": "Imaging when appropriate",
            "text": "MRI may be used to look for a structural cause."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Botulinum toxin injections",
            "text": "Injections can reduce involuntary facial contractions."
        },
        {
            "title": "Surgical treatment",
            "text": "Microvascular decompression may be considered in selected confirmed cases."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Hemifacial spasm is not usually an emergency.",
    "seekCare": "New one-sided facial movement with weakness, numbness, severe headache, or other neurologic symptoms should receive prompt medical evaluation.",
    "urgent": false,
    "related": [
        "eyelid-myokymia",
        "blepharospasm"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "preseptal-cellulitis",
    "name": "Preseptal (Periorbital) Cellulitis",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "periorbital cellulitis",
        "infected swollen eyelid"
    ],
    "intro": "Preseptal cellulitis is infection of the eyelid and surrounding tissues in front of the orbital septum.",
    "overview": [
        "Preseptal cellulitis is infection of the eyelid and surrounding tissues in front of the orbital septum.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Red swollen eyelid",
        "Tenderness",
        "Warmth",
        "Possible fever",
        "Eye itself usually moves normally"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Local infection",
            "text": "Skin infection, sinus disease, trauma, or an eyelid lesion can allow bacteria to spread into superficial eyelid tissues."
        }
    ],
    "riskFactors": [
        "Recent skin infection or injury",
        "Sinus or respiratory infection",
        "Children are commonly affected"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "Examination focuses on distinguishing superficial eyelid infection from deeper orbital cellulitis.",
    "exams": [
        {
            "title": "Vision and pupil testing",
            "text": "Normal visual function supports a superficial process."
        },
        {
            "title": "Eye-movement examination",
            "text": "Painful or restricted movement raises concern for orbital involvement."
        },
        {
            "title": "Imaging when needed",
            "text": "CT or other imaging may be used if deeper infection cannot be excluded."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Antibiotic treatment",
            "text": "Appropriate systemic antibiotics are used."
        },
        {
            "title": "Close monitoring",
            "text": "Symptoms are monitored for signs of progression into the orbit."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Preseptal cellulitis should be medically evaluated.",
    "seekCare": "Reduced vision, painful or restricted eye movement, a protruding eye, severe headache, or worsening systemic illness can indicate orbital cellulitis and needs urgent care.",
    "urgent": true,
    "related": [
        "orbital-cellulitis",
        "stye"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — On Call Ophthalmology",
            "url": "https://eyewiki.aao.org/On_Call_Ophthalmology"
        }
    ]
},

{
    "id": "tear-duct-obstruction",
    "name": "Tear-Duct Obstruction",
    "category": "eyelids-tears",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "blocked tear duct",
        "watery eye drainage",
        "tears won't drain"
    ],
    "intro": "A tear-duct obstruction prevents tears from draining normally from the eye into the nose, causing tears to overflow.",
    "overview": [
        "A tear-duct obstruction prevents tears from draining normally from the eye into the nose, causing tears to overflow.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Persistent watering",
        "Tears running down the cheek",
        "Often one eye worse",
        "Possible recurrent discharge or infection"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Narrowed or blocked drainage pathway",
            "text": "Any part of the drainage system from the eyelid punctum to the nose can become obstructed."
        },
        {
            "title": "Congenital blockage",
            "text": "Some infants are born with a membrane that has not fully opened."
        },
        {
            "title": "Acquired scarring or narrowing",
            "text": "Age, inflammation, trauma, surgery, or other disease can narrow the system."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Prior tear-system infection",
        "Facial trauma or surgery",
        "Congenital history in infants"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The drainage openings and tear sac are examined, and the system may be irrigated or otherwise tested to locate a blockage.",
    "exams": [
        {
            "title": "Punctum examination",
            "text": "The small lid openings are checked."
        },
        {
            "title": "Tear-drainage testing",
            "text": "Dye, irrigation, or probing may be used."
        },
        {
            "title": "Nasal or imaging assessment",
            "text": "Additional evaluation may be needed for deeper blockage."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation in selected infants",
            "text": "Many congenital obstructions improve during infancy."
        },
        {
            "title": "Treat infection or inflammation",
            "text": "Associated infection requires medical treatment."
        },
        {
            "title": "Drainage procedure",
            "text": "Persistent obstruction may require dilation, stenting, or tear-duct surgery."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most chronic tear-duct obstruction is non-urgent.",
    "seekCare": "Painful red swelling near the inner corner of the eye, fever, or rapidly worsening symptoms can indicate dacryocystitis and needs prompt evaluation.",
    "urgent": false,
    "related": [
        "punctal-stenosis",
        "dacryocystitis",
        "canaliculitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "punctal-stenosis",
    "name": "Punctal Stenosis",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "small tear opening",
        "puncta blocked",
        "watery eye punctum"
    ],
    "intro": "Punctal stenosis is narrowing of one or more tiny tear-drainage openings on the eyelid margin.",
    "overview": [
        "Punctal stenosis is narrowing of one or more tiny tear-drainage openings on the eyelid margin.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Overflow tearing",
        "Watery eye without much irritation",
        "Tears running down cheek"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Age-related narrowing",
            "text": "The punctal opening may shrink over time."
        },
        {
            "title": "Inflammation or scarring",
            "text": "Chronic lid inflammation, medication, or prior procedures can narrow the opening."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Chronic blepharitis",
        "Prior eyelid or tear procedures"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The puncta are inspected under magnification, and the rest of the drainage system may be tested if needed.",
    "exams": [
        {
            "title": "Punctum inspection",
            "text": "The size and position of the opening are examined."
        },
        {
            "title": "Drainage testing",
            "text": "Irrigation can determine whether blockage exists farther downstream."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Dilation",
            "text": "A narrowed punctum can sometimes be enlarged."
        },
        {
            "title": "Punctoplasty",
            "text": "A small procedure may be used to create a more durable opening."
        },
        {
            "title": "Treat inflammation",
            "text": "Associated blepharitis or scarring may need treatment."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Punctal stenosis is generally non-urgent.",
    "seekCare": "Painful swelling or infection near the inner corner suggests a different tear-system problem and should be assessed promptly.",
    "urgent": false,
    "related": [
        "tear-duct-obstruction",
        "blepharitis"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "dacryocystitis",
    "name": "Dacryocystitis",
    "category": "eyelids-tears",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "tear sac infection",
        "inner corner eye swelling",
        "dacryocystitis eye"
    ],
    "intro": "Dacryocystitis is inflammation or infection of the tear sac, usually related to blockage in the tear-drainage pathway.",
    "overview": [
        "Dacryocystitis is inflammation or infection of the tear sac, usually related to blockage in the tear-drainage pathway.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Painful swelling near inner corner of eye",
        "Redness beside the nose",
        "Tearing",
        "Discharge",
        "Tenderness",
        "Possible fever"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Blocked nasolacrimal duct",
            "text": "Stagnant tears behind a blockage can allow infection to develop."
        }
    ],
    "riskFactors": [
        "Known tear-duct obstruction",
        "Prior episodes",
        "Tear-system narrowing"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The tender inner-corner swelling and tear-drainage system are examined; imaging may be added if infection is extensive or atypical.",
    "exams": [
        {
            "title": "Tear-sac examination",
            "text": "The area beside the nose is inspected and gently assessed."
        },
        {
            "title": "Drainage evaluation",
            "text": "The site of obstruction is considered after acute infection is controlled."
        },
        {
            "title": "Imaging when needed",
            "text": "More extensive infection may require imaging."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Antibiotic treatment",
            "text": "Acute bacterial infection usually requires systemic treatment."
        },
        {
            "title": "Treat the obstruction",
            "text": "A procedure may be needed later to restore drainage and reduce recurrence."
        },
        {
            "title": "Drainage of abscess when necessary",
            "text": "A collection of infection may require a procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Acute dacryocystitis needs prompt medical evaluation.",
    "seekCare": "Rapidly spreading redness, fever, severe illness, or signs that infection is extending around the eye require urgent care.",
    "urgent": true,
    "related": [
        "tear-duct-obstruction",
        "canaliculitis"
    ],
    "sources": [
        {
            "name": "AAO EyeWiki — On Call Ophthalmology",
            "url": "https://eyewiki.aao.org/On_Call_Ophthalmology"
        }
    ]
},

{
    "id": "canaliculitis",
    "name": "Canaliculitis",
    "category": "eyelids-tears",
    "frequency": "Rare",
    "careTag": "Usually non-emergency",
    "aliases": [
        "tear canal infection",
        "punctum discharge",
        "one eye tearing discharge"
    ],
    "intro": "Canaliculitis is inflammation or infection of one of the small channels that carry tears from the eyelid toward the tear sac.",
    "overview": [
        "Canaliculitis is inflammation or infection of one of the small channels that carry tears from the eyelid toward the tear sac.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "One-sided tearing",
        "Persistent discharge",
        "Tenderness near the inner eyelid",
        "Red punctum",
        "Symptoms may be chronic or repeatedly return"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Canalicular infection",
            "text": "Organisms can persist within the small tear-drainage canal."
        },
        {
            "title": "Retained material",
            "text": "Concretions or other material can block the channel and allow chronic infection."
        }
    ],
    "riskFactors": [
        "Prior tear procedures or punctal plugs in some cases",
        "Chronic unexplained one-sided discharge"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "The punctum and canaliculus are examined closely; expressed material or irrigation may help establish the diagnosis.",
    "exams": [
        {
            "title": "Punctum examination",
            "text": "Redness, swelling, and discharge are inspected."
        },
        {
            "title": "Canalicular expression",
            "text": "Material may be expressed from the drainage channel."
        },
        {
            "title": "Microbiology when needed",
            "text": "Discharge or concretions may be tested."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Antimicrobial treatment",
            "text": "Medication is selected according to the suspected cause."
        },
        {
            "title": "Removal of retained material",
            "text": "Concretions or foreign material may need to be removed."
        },
        {
            "title": "Canalicular procedure",
            "text": "Persistent infection may require a minor surgical procedure."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Canaliculitis is usually not an emergency but often needs targeted treatment.",
    "seekCare": "Spreading swelling, fever, or deeper orbital symptoms require prompt evaluation.",
    "urgent": false,
    "related": [
        "dacryocystitis",
        "tear-duct-obstruction"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "eyelid-lesions",
    "name": "Eyelid Lesions & Growths",
    "category": "eyelids-tears",
    "frequency": "Common as a group",
    "careTag": "Persistent or changing lesions need evaluation",
    "aliases": [
        "eyelid growth",
        "eyelid tumor",
        "eyelid bump won't go away",
        "changing eyelid spot"
    ],
    "intro": "Eyelid lesions include many benign and less common serious growths involving the eyelid skin, margin, glands, or lashes.",
    "overview": [
        "Eyelid lesions include many benign and less common serious growths involving the eyelid skin, margin, glands, or lashes.",
        "Eyelid and tear-system problems can affect comfort, blinking, lubrication, eye alignment, and protection of the cornea. Many are easy to recognize during a direct eye examination."
    ],
    "overviewDetailed": "<h3>Why the eyelids matter</h3><p>The eyelids protect the ocular surface, spread the tear film with each blink, contain oil-producing glands, and help direct tears into the drainage system. A problem with lid position, lashes, glands, or drainage can therefore cause both eyelid and eye-surface symptoms.</p>",
    "symptoms": [
        "Persistent bump or growth",
        "Color or shape change",
        "Crusting",
        "Bleeding",
        "Loss of eyelashes around a lesion",
        "Repeated lesion in same location"
    ],
    "symptomsDetailed": "<h3>Location is useful</h3><p>A tender bump at the lash line, a deeper painless lump, lashes touching the cornea, inward or outward lid turning, and swelling near the inner corner of the eye all point toward different eyelid or tear-system problems.</p>",
    "causes": [
        {
            "title": "Benign growths",
            "text": "Cysts, papillomas, nevi, and other noncancerous lesions are common."
        },
        {
            "title": "Inflammatory lesions",
            "text": "Styes and chalazia can create temporary lumps."
        },
        {
            "title": "Skin cancer and other tumors",
            "text": "Some persistent eyelid lesions require biopsy to identify the tissue type."
        }
    ],
    "riskFactors": [
        "Sun exposure",
        "Increasing age",
        "Prior skin cancers",
        "Immunosuppression"
    ],
    "causesDetailed": "<h3>Several structures can be involved at once</h3><p>Blepharitis, meibomian-gland dysfunction, dry eye, rosacea, and recurrent styes or chalazia often overlap. Treatment may therefore address more than one eyelid or ocular-surface problem.</p>",
    "diagnosis": "An eye-care professional examines the lesion's location, surface, borders, lashes, and growth history and may recommend photography or biopsy.",
    "exams": [
        {
            "title": "Magnified eyelid examination",
            "text": "The lesion and surrounding lashes are inspected."
        },
        {
            "title": "Photography",
            "text": "Images can document change over time."
        },
        {
            "title": "Biopsy",
            "text": "Suspicious or unexplained lesions may require a tissue sample for diagnosis."
        }
    ],
    "diagnosisDetailed": "<h3>Direct inspection matters</h3><p>A slit-lamp examination lets the clinician inspect the lashes, lid margins, gland openings, tear-drainage openings, conjunctiva, and cornea at high magnification.</p>",
    "treatmentIntro": "Management depends on the structure involved, how long the problem has been present, and whether the ocular surface or vision is affected.",
    "treatments": [
        {
            "title": "Observation",
            "text": "Clearly benign stable lesions may simply be monitored."
        },
        {
            "title": "Removal",
            "text": "Some lesions are removed because of irritation, appearance, or uncertainty."
        },
        {
            "title": "Cancer-directed treatment",
            "text": "A malignant lesion requires treatment based on its specific pathology."
        }
    ],
    "treatmentDetailed": "<h3>Treatment is condition-specific</h3><p>Some eyelid problems respond to lid hygiene or lubrication, while others need prescription medicine, removal of misdirected lashes, drainage procedures, injections, or eyelid surgery.</p>",
    "seekCareHeading": "Most eyelid bumps are benign, but persistent changes deserve examination.",
    "seekCare": "A lesion that grows, repeatedly bleeds, ulcerates, causes lash loss, changes color or shape, or repeatedly returns in the same place should be professionally evaluated rather than assumed to be a stye or chalazion.",
    "urgent": false,
    "related": [
        "chalazion",
        "stye"
    ],
    "sources": [
        {
            "name": "National Eye Institute — Blepharitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/blepharitis"
        }
    ]
},

{
    "id": "conjunctival-red-eye-conditions",
    "name": "Conjunctiva & Red Eye Conditions",
    "category": "conjunctiva-red-eye",
    "frequency": "Common as a group",
    "careTag": "Depends on symptoms",
    "aliases": [
        "red eye",
        "pink eye",
        "bloodshot eye"
    ],
    "intro": "Red eye can come from the conjunctiva, cornea, eyelids, inflammation inside the eye, pressure problems, or injury.",
    "overview": [
        "Red eye can come from the conjunctiva, cornea, eyelids, inflammation inside the eye, pressure problems, or injury.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Redness",
        "Discharge or watering",
        "Itching",
        "Burning",
        "Pain in some causes",
        "Light sensitivity in more serious causes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Surface inflammation",
            "text": "Allergy, infection, irritation, and dryness commonly cause red eyes."
        },
        {
            "title": "Deeper eye disease",
            "text": "Corneal disease, uveitis, scleritis, or acute pressure problems can also cause redness."
        }
    ],
    "riskFactors": [
        "Contact with infection",
        "Allergies",
        "Dry eye",
        "Contact lenses",
        "Eye injury"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Conjunctivitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/pink-eye"
        }
    ]
},

{
    "id": "viral-conjunctivitis",
    "name": "Viral Conjunctivitis",
    "category": "conjunctiva-red-eye",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "viral pink eye",
        "watery pink eye"
    ],
    "intro": "Viral conjunctivitis is inflammation of the conjunctiva caused by a virus and is a common cause of contagious pink eye.",
    "overview": [
        "Viral conjunctivitis is inflammation of the conjunctiva caused by a virus and is a common cause of contagious pink eye.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Watery red eye",
        "Irritation",
        "Often starts in one eye then affects the other",
        "Possible cold-like symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Viral infection",
            "text": "Respiratory and other viruses can inflame the conjunctiva."
        }
    ],
    "riskFactors": [
        "Close contact with an infected person",
        "Recent respiratory illness"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Conjunctivitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/pink-eye"
        }
    ]
},

{
    "id": "bacterial-conjunctivitis",
    "name": "Bacterial Conjunctivitis",
    "category": "conjunctiva-red-eye",
    "frequency": "Common",
    "careTag": "Evaluation may be needed",
    "aliases": [
        "bacterial pink eye",
        "eye discharge infection"
    ],
    "intro": "Bacterial conjunctivitis is conjunctival inflammation caused by bacteria.",
    "overview": [
        "Bacterial conjunctivitis is conjunctival inflammation caused by bacteria.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Red eye",
        "Mucus or pus-like discharge",
        "Lids stuck together after sleep",
        "Irritation"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Bacterial infection",
            "text": "Bacteria infect the conjunctival surface."
        }
    ],
    "riskFactors": [
        "Exposure to infected secretions",
        "Poor hand hygiene"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Conjunctivitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/pink-eye"
        }
    ]
},

{
    "id": "allergic-conjunctivitis",
    "name": "Allergic Conjunctivitis",
    "category": "conjunctiva-red-eye",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "itchy eyes allergy",
        "seasonal eye allergy"
    ],
    "intro": "Allergic conjunctivitis is an allergic reaction affecting the conjunctiva, often in both eyes.",
    "overview": [
        "Allergic conjunctivitis is an allergic reaction affecting the conjunctiva, often in both eyes.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Intense itching",
        "Watery eyes",
        "Redness",
        "Puffy lids",
        "Often both eyes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Allergen exposure",
            "text": "Pollen, animals, dust mites, or other allergens trigger inflammation."
        }
    ],
    "riskFactors": [
        "Seasonal allergies",
        "Atopy",
        "Environmental allergens"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Conjunctivitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/pink-eye"
        }
    ]
},

{
    "id": "giant-papillary-conjunctivitis",
    "name": "Giant Papillary Conjunctivitis",
    "category": "conjunctiva-red-eye",
    "frequency": "Uncommon",
    "careTag": "Eye exam recommended",
    "aliases": [
        "GPC",
        "contact lens allergy"
    ],
    "intro": "Giant papillary conjunctivitis is inflammation of the inner upper eyelid often associated with contact lenses or another chronic mechanical stimulus.",
    "overview": [
        "Giant papillary conjunctivitis is inflammation of the inner upper eyelid often associated with contact lenses or another chronic mechanical stimulus.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Itching",
        "Mucus",
        "Contact-lens intolerance",
        "Lens movement",
        "Redness"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Chronic mechanical irritation",
            "text": "Contact lenses or other ocular devices can stimulate the inner lid."
        },
        {
            "title": "Inflammatory response",
            "text": "The upper tarsal conjunctiva develops enlarged papillae."
        }
    ],
    "riskFactors": [
        "Contact-lens wear",
        "Ocular prosthesis or exposed suture"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "subconjunctival-hemorrhage",
    "name": "Subconjunctival Hemorrhage",
    "category": "conjunctiva-red-eye",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "blood spot eye",
        "broken blood vessel eye"
    ],
    "intro": "A subconjunctival hemorrhage is a small amount of blood trapped beneath the clear conjunctiva, creating a sharply red patch on the white of the eye.",
    "overview": [
        "A subconjunctival hemorrhage is a small amount of blood trapped beneath the clear conjunctiva, creating a sharply red patch on the white of the eye.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Bright red patch",
        "Usually no pain",
        "Usually no vision change"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Small surface blood vessel breaks",
            "text": "This can occur spontaneously or after coughing, straining, rubbing, or minor trauma."
        }
    ],
    "riskFactors": [
        "Blood-thinning medicines",
        "High blood pressure",
        "Minor trauma or straining"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "episcleritis",
    "name": "Episcleritis",
    "category": "conjunctiva-red-eye",
    "frequency": "Uncommon",
    "careTag": "Eye exam recommended",
    "aliases": [
        "sectoral red eye",
        "episcleral inflammation"
    ],
    "intro": "Episcleritis is inflammation of the thin tissue between the conjunctiva and sclera.",
    "overview": [
        "Episcleritis is inflammation of the thin tissue between the conjunctiva and sclera.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Localized or diffuse redness",
        "Mild tenderness or irritation",
        "Usually little effect on vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inflammation",
            "text": "Many cases have no identified cause; some occur with systemic inflammatory disease."
        }
    ],
    "riskFactors": [
        "Autoimmune or inflammatory disease in some cases"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "scleritis",
    "name": "Scleritis",
    "category": "conjunctiva-red-eye",
    "frequency": "Rare",
    "careTag": "Prompt evaluation",
    "aliases": [
        "deep painful red eye",
        "sclera inflammation"
    ],
    "intro": "Scleritis is deeper inflammation of the white wall of the eye and can be associated with significant pain and systemic inflammatory disease.",
    "overview": [
        "Scleritis is deeper inflammation of the white wall of the eye and can be associated with significant pain and systemic inflammatory disease.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Deep eye pain",
        "Marked redness",
        "Tenderness",
        "Possible light sensitivity",
        "Possible reduced vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Immune-mediated inflammation",
            "text": "Systemic autoimmune disease can inflame the sclera."
        },
        {
            "title": "Infection",
            "text": "A minority of cases are infectious."
        }
    ],
    "riskFactors": [
        "Autoimmune disease",
        "Previous ocular surgery or trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "conjunctival-cyst",
    "name": "Conjunctival Cyst",
    "category": "conjunctiva-red-eye",
    "frequency": "Uncommon",
    "careTag": "Usually non-emergency",
    "aliases": [
        "clear bubble on eye",
        "conjunctiva bump"
    ],
    "intro": "A conjunctival cyst is a small fluid-filled or inclusion cyst on the conjunctival surface.",
    "overview": [
        "A conjunctival cyst is a small fluid-filled or inclusion cyst on the conjunctival surface.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Clear or pale bump",
        "Foreign-body sensation",
        "Sometimes no symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Blocked or trapped epithelial tissue",
            "text": "A small cyst can form spontaneously or after irritation, surgery, or trauma."
        }
    ],
    "riskFactors": [
        "Prior eye surgery or irritation"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "conjunctival-nevus",
    "name": "Conjunctival Nevus",
    "category": "conjunctiva-red-eye",
    "frequency": "Uncommon",
    "careTag": "Changing lesions need evaluation",
    "aliases": [
        "brown spot eye",
        "eye freckle conjunctiva"
    ],
    "intro": "A conjunctival nevus is a usually benign pigmented or lightly colored lesion on the conjunctiva.",
    "overview": [
        "A conjunctival nevus is a usually benign pigmented or lightly colored lesion on the conjunctiva.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Stable spot on white of eye",
        "Brown, tan, or lightly colored lesion",
        "Usually no discomfort"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Benign melanocytic growth",
            "text": "Pigment-producing cells form a localized lesion."
        }
    ],
    "riskFactors": [
        "Often noticed in childhood or young adulthood"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "lens-cataract-conditions",
    "name": "Lens & Cataract Conditions",
    "category": "lens-cataracts",
    "frequency": "Common as a group",
    "careTag": "Routine unless sudden",
    "aliases": [
        "lens problem",
        "cloudy lens"
    ],
    "intro": "Lens conditions change the clarity, position, or focusing properties of the natural lens inside the eye.",
    "overview": [
        "Lens conditions change the clarity, position, or focusing properties of the natural lens inside the eye.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Blur",
        "Glare",
        "Halos",
        "Faded colors",
        "Night-vision difficulty",
        "Prescription changes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Lens clouding",
            "text": "Cataracts reduce lens transparency."
        },
        {
            "title": "Lens position change",
            "text": "Trauma or connective-tissue disease can displace the lens."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Diabetes",
        "Steroid exposure",
        "Eye trauma",
        "Family history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ]
},

{
    "id": "nuclear-sclerotic-cataract",
    "name": "Nuclear Sclerotic Cataract",
    "category": "lens-cataracts",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "nuclear cataract",
        "yellow lens cataract"
    ],
    "intro": "A nuclear sclerotic cataract primarily affects the central nucleus of the lens and is strongly associated with aging.",
    "overview": [
        "A nuclear sclerotic cataract primarily affects the central nucleus of the lens and is strongly associated with aging.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Gradual distance blur",
        "Night-driving difficulty",
        "Color changes",
        "Glare",
        "Prescription may become more nearsighted"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Age-related lens hardening and yellowing",
            "text": "The central lens becomes denser over time."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Smoking",
        "Diabetes"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ]
},

{
    "id": "cortical-cataract",
    "name": "Cortical Cataract",
    "category": "lens-cataracts",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "spoke cataract",
        "cortical spokes"
    ],
    "intro": "A cortical cataract forms spoke-like or wedge-shaped opacities in the outer lens cortex.",
    "overview": [
        "A cortical cataract forms spoke-like or wedge-shaped opacities in the outer lens cortex.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Glare",
        "Halos",
        "Blur",
        "Light scatter",
        "Night-driving difficulty"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Lens-fiber opacity",
            "text": "Changes develop in the outer lens fibers."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Diabetes",
        "Other cataract risk factors"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ]
},

{
    "id": "posterior-subcapsular-cataract",
    "name": "Posterior Subcapsular Cataract",
    "category": "lens-cataracts",
    "frequency": "Common",
    "careTag": "Usually non-emergency",
    "aliases": [
        "PSC cataract",
        "posterior cataract"
    ],
    "intro": "A posterior subcapsular cataract forms near the back surface of the lens and can cause disproportionate glare or near-vision difficulty.",
    "overview": [
        "A posterior subcapsular cataract forms near the back surface of the lens and can cause disproportionate glare or near-vision difficulty.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Glare",
        "Halos",
        "Near blur",
        "Difficulty in bright light",
        "Night-vision problems"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Posterior lens opacity",
            "text": "Clouding develops near the visual axis at the back of the lens."
        }
    ],
    "riskFactors": [
        "Steroid exposure",
        "Diabetes",
        "Inflammation",
        "Younger age than typical age-related cataract in some cases"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ]
},

{
    "id": "congenital-cataract",
    "name": "Congenital / Pediatric Cataract",
    "category": "lens-cataracts",
    "frequency": "Rare",
    "careTag": "Early pediatric evaluation",
    "aliases": [
        "baby cataract",
        "child cataract"
    ],
    "intro": "A pediatric cataract is lens clouding present at birth or developing during childhood.",
    "overview": [
        "A pediatric cataract is lens clouding present at birth or developing during childhood.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Abnormal red reflex",
        "Reduced vision",
        "Eye misalignment",
        "Nystagmus in severe bilateral cases",
        "Sometimes no obvious symptom"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Genetic causes",
            "text": "Some pediatric cataracts are inherited."
        },
        {
            "title": "Developmental, metabolic, infectious, or other causes",
            "text": "Several childhood conditions can affect lens clarity."
        }
    ],
    "riskFactors": [
        "Family history",
        "Certain childhood or prenatal conditions"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [
        "amblyopia"
    ],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ],
    "categories": [
        "lens-cataracts",
        "genetic-inherited"
    ]
},

{
    "id": "traumatic-cataract",
    "name": "Traumatic Cataract",
    "category": "lens-cataracts",
    "frequency": "Uncommon",
    "careTag": "Prompt assessment after injury",
    "aliases": [
        "cataract after injury",
        "trauma lens"
    ],
    "intro": "A traumatic cataract is lens clouding that develops after significant eye injury.",
    "overview": [
        "A traumatic cataract is lens clouding that develops after significant eye injury.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Blur after injury",
        "Glare",
        "Lens opacity",
        "Vision may worsen immediately or later"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Lens injury",
            "text": "Blunt or penetrating trauma can damage lens fibers or capsule."
        }
    ],
    "riskFactors": [
        "Prior significant eye trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ],
    "categories": [
        "lens-cataracts",
        "injury-exposure"
    ]
},

{
    "id": "posterior-capsule-opacification",
    "name": "Posterior Capsule Opacification",
    "category": "lens-cataracts",
    "frequency": "Common after cataract surgery",
    "careTag": "Usually non-emergency",
    "aliases": [
        "PCO",
        "secondary cataract",
        "after cataract"
    ],
    "intro": "Posterior capsule opacification is clouding of the capsule behind an artificial lens after cataract surgery; it is sometimes called a secondary cataract.",
    "overview": [
        "Posterior capsule opacification is clouding of the capsule behind an artificial lens after cataract surgery; it is sometimes called a secondary cataract.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Return of hazy vision after cataract surgery",
        "Glare",
        "Reduced contrast"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Lens epithelial cell growth",
            "text": "Cells can cloud the posterior capsule after surgery."
        }
    ],
    "riskFactors": [
        "Previous cataract surgery"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "YAG laser capsulotomy",
            "text": "A laser opening in the cloudy capsule can restore the visual pathway when appropriate."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Cataracts",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts"
        }
    ]
},

{
    "id": "ectopia-lentis",
    "name": "Ectopia Lentis / Lens Subluxation",
    "category": "lens-cataracts",
    "frequency": "Rare",
    "careTag": "Evaluation recommended",
    "aliases": [
        "dislocated lens",
        "subluxed lens"
    ],
    "intro": "Ectopia lentis is partial or complete displacement of the natural lens from its normal position.",
    "overview": [
        "Ectopia lentis is partial or complete displacement of the natural lens from its normal position.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Blur",
        "Changing astigmatism",
        "Monocular double vision",
        "Visible lens edge in some cases"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Weak zonular fibers",
            "text": "The fibers holding the lens can be abnormal or damaged."
        }
    ],
    "riskFactors": [
        "Trauma",
        "Marfan syndrome",
        "Homocystinuria",
        "Other connective-tissue or inherited disorders"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "lens-cataracts",
        "genetic-inherited",
        "injury-exposure"
    ]
},

{
    "id": "retina-macula-conditions",
    "name": "Retina & Macula Conditions",
    "category": "retina-macula",
    "frequency": "Common as a group",
    "careTag": "Depends on symptoms",
    "aliases": [
        "retina problem",
        "macula problem"
    ],
    "intro": "The retina senses light at the back of the eye, while the macula provides detailed central vision.",
    "overview": [
        "The retina senses light at the back of the eye, while the macula provides detailed central vision.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur or distortion",
        "Flashes or floaters",
        "Missing areas of vision",
        "Reduced night vision",
        "Color changes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Vascular disease",
            "text": "Diabetes, vein occlusion, or artery occlusion can affect retinal circulation."
        },
        {
            "title": "Degeneration or traction",
            "text": "Age, inherited disease, vitreous changes, or membranes can affect retinal structure."
        }
    ],
    "riskFactors": [
        "Age",
        "Diabetes",
        "High myopia",
        "Family history",
        "Vascular disease"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "posterior-vitreous-detachment",
    "name": "Posterior Vitreous Detachment",
    "category": "retina-macula",
    "frequency": "Common with age",
    "careTag": "Prompt dilated exam for new symptoms",
    "aliases": [
        "PVD",
        "new flashes floaters",
        "vitreous detachment"
    ],
    "intro": "Posterior vitreous detachment occurs when the vitreous gel separates from the retina, commonly with aging.",
    "overview": [
        "Posterior vitreous detachment occurs when the vitreous gel separates from the retina, commonly with aging.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "New floaters",
        "Flashes of light",
        "Cobweb or ring-like floater"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Age-related vitreous change",
            "text": "The gel liquefies and separates from the retina."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Myopia",
        "Prior eye surgery"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [
        "retinal-tear",
        "retinal-detachment"
    ],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "retinal-tear",
    "name": "Retinal Tear",
    "category": "retina-macula",
    "frequency": "Uncommon",
    "careTag": "Urgent evaluation",
    "aliases": [
        "retina tear",
        "horseshoe tear"
    ],
    "intro": "A retinal tear is a break in the retina that can allow fluid underneath it and lead to retinal detachment.",
    "overview": [
        "A retinal tear is a break in the retina that can allow fluid underneath it and lead to retinal detachment.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Sudden new floaters",
        "Flashes",
        "Sometimes no symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Vitreoretinal traction",
            "text": "The vitreous can pull strongly enough to tear the retina."
        }
    ],
    "riskFactors": [
        "Posterior vitreous detachment",
        "High myopia",
        "Trauma",
        "Prior retinal tear or detachment"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [
        "posterior-vitreous-detachment",
        "retinal-detachment"
    ],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "age-related-macular-degeneration",
    "name": "Age-Related Macular Degeneration (AMD)",
    "category": "retina-macula",
    "frequency": "Common in older adults",
    "careTag": "Prompt evaluation for new distortion",
    "aliases": [
        "AMD",
        "macular degeneration"
    ],
    "intro": "AMD affects the macula and can reduce detailed central vision while usually leaving peripheral vision available.",
    "overview": [
        "AMD affects the macula and can reduce detailed central vision while usually leaving peripheral vision available.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur",
        "Straight lines look wavy",
        "Difficulty recognizing faces",
        "Central missing or dim area"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Macular degeneration",
            "text": "Age-related changes damage the central retina."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Smoking",
        "Family history",
        "Cardiovascular risk factors"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI AMD",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration"
        }
    ]
},

{
    "id": "dry-amd",
    "name": "Dry AMD",
    "category": "retina-macula",
    "frequency": "Common in older adults",
    "careTag": "Regular monitoring",
    "aliases": [
        "nonexudative AMD",
        "dry macular degeneration"
    ],
    "intro": "Dry AMD is the more common form of age-related macular degeneration and involves progressive macular changes without abnormal leaking vessels.",
    "overview": [
        "Dry AMD is the more common form of age-related macular degeneration and involves progressive macular changes without abnormal leaking vessels.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Gradual central blur",
        "Reduced contrast",
        "Need for brighter light",
        "Central distortion in later disease"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Drusen and retinal degeneration",
            "text": "Age-related deposits and cell changes affect the macula."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Smoking",
        "Family history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI AMD",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration"
        }
    ]
},

{
    "id": "wet-amd",
    "name": "Wet AMD",
    "category": "retina-macula",
    "frequency": "Less common than dry AMD",
    "careTag": "Prompt retinal evaluation",
    "aliases": [
        "neovascular AMD",
        "exudative AMD",
        "wet macular degeneration"
    ],
    "intro": "Wet AMD occurs when abnormal blood vessels grow beneath the macula and leak fluid or blood.",
    "overview": [
        "Wet AMD occurs when abnormal blood vessels grow beneath the macula and leak fluid or blood.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "New central distortion",
        "Straight lines look wavy",
        "Rapid central blur",
        "Dark or missing central spot"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Abnormal choroidal blood vessels",
            "text": "Fragile vessels leak beneath or into the retina."
        }
    ],
    "riskFactors": [
        "Existing AMD",
        "Increasing age",
        "Smoking"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Anti-VEGF injections",
            "text": "Medicines injected into the eye can suppress abnormal vessel leakage and growth."
        },
        {
            "title": "Monitoring",
            "text": "Retinal imaging is used to follow treatment response."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "NEI AMD",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration"
        }
    ]
},

{
    "id": "diabetic-retinopathy",
    "name": "Diabetic Retinopathy",
    "category": "retina-macula",
    "frequency": "Common in diabetes",
    "careTag": "Regular dilated retinal exams",
    "aliases": [
        "DR",
        "diabetes eye disease"
    ],
    "intro": "Diabetic retinopathy is retinal blood-vessel damage caused by diabetes.",
    "overview": [
        "Diabetic retinopathy is retinal blood-vessel damage caused by diabetes.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Often no early symptoms",
        "Blur",
        "Floaters",
        "Missing areas of vision",
        "Vision loss in advanced disease"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Chronic high blood glucose",
            "text": "Diabetes damages small retinal blood vessels."
        }
    ],
    "riskFactors": [
        "Diabetes duration",
        "Blood-glucose control",
        "Blood pressure",
        "Kidney disease"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Diabetic Retinopathy",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/diabetic-retinopathy"
        }
    ]
},

{
    "id": "diabetic-macular-edema",
    "name": "Diabetic Macular Edema",
    "category": "retina-macula",
    "frequency": "Common complication of diabetic retinopathy",
    "careTag": "Retina evaluation",
    "aliases": [
        "DME",
        "diabetic macula swelling"
    ],
    "intro": "Diabetic macular edema is swelling in the macula caused by leaking retinal vessels in diabetes.",
    "overview": [
        "Diabetic macular edema is swelling in the macula caused by leaking retinal vessels in diabetes.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur",
        "Distortion",
        "Reduced reading vision",
        "Colors may appear less vivid"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Retinal vascular leakage",
            "text": "Diabetes-damaged vessels leak fluid into the macula."
        }
    ],
    "riskFactors": [
        "Diabetic retinopathy",
        "Longstanding diabetes"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Diabetic Retinopathy",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/diabetic-retinopathy"
        }
    ]
},

{
    "id": "epiretinal-membrane",
    "name": "Epiretinal Membrane",
    "category": "retina-macula",
    "frequency": "Common with age",
    "careTag": "Usually non-emergency",
    "aliases": [
        "ERM",
        "macular pucker"
    ],
    "intro": "An epiretinal membrane is a thin layer of tissue on the macular surface that can wrinkle or distort the retina.",
    "overview": [
        "An epiretinal membrane is a thin layer of tissue on the macular surface that can wrinkle or distort the retina.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Wavy lines",
        "Central distortion",
        "Blur",
        "Images may look different sizes between eyes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Membrane contraction",
            "text": "A thin fibrocellular layer forms and contracts over the macula."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Posterior vitreous detachment",
        "Retinal surgery or inflammation"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "macular-hole",
    "name": "Macular Hole",
    "category": "retina-macula",
    "frequency": "Uncommon",
    "careTag": "Retina evaluation",
    "aliases": [
        "hole in macula",
        "central retinal hole"
    ],
    "intro": "A macular hole is a small full-thickness defect in the central macula.",
    "overview": [
        "A macular hole is a small full-thickness defect in the central macula.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur",
        "Distortion",
        "Small missing central spot"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Vitreomacular traction",
            "text": "Vitreous pulling can create a central retinal opening."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Female sex",
        "Trauma in some cases"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "central-serous-chorioretinopathy",
    "name": "Central Serous Chorioretinopathy",
    "category": "retina-macula",
    "frequency": "Uncommon",
    "careTag": "Eye exam recommended",
    "aliases": [
        "CSCR",
        "CSR",
        "central serous"
    ],
    "intro": "Central serous chorioretinopathy causes fluid to collect beneath the central retina.",
    "overview": [
        "Central serous chorioretinopathy causes fluid to collect beneath the central retina.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur",
        "Distortion",
        "Objects may look smaller",
        "Dim or washed-out central vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Choroidal leakage",
            "text": "Fluid crosses beneath the retina and elevates the macula."
        }
    ],
    "riskFactors": [
        "Steroid exposure",
        "Stress association",
        "Often affects younger or middle-aged adults"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "retinal-vein-occlusion",
    "name": "Retinal Vein Occlusion",
    "category": "retina-macula",
    "frequency": "Uncommon",
    "careTag": "Prompt retinal evaluation",
    "aliases": [
        "RVO",
        "BRVO",
        "CRVO",
        "retinal vein blockage"
    ],
    "intro": "Retinal vein occlusion occurs when a retinal vein becomes blocked, causing hemorrhage, swelling, and sometimes macular edema.",
    "overview": [
        "Retinal vein occlusion occurs when a retinal vein becomes blocked, causing hemorrhage, swelling, and sometimes macular edema.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Sudden or subacute painless blur",
        "One eye commonly affected",
        "Central or widespread vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Venous blockage",
            "text": "Impaired retinal drainage leads to blood and fluid leakage."
        }
    ],
    "riskFactors": [
        "High blood pressure",
        "Diabetes",
        "Glaucoma",
        "Increasing age"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "retinal-artery-occlusion",
    "name": "Retinal Artery Occlusion",
    "category": "retina-macula",
    "frequency": "Rare",
    "careTag": "Emergency evaluation",
    "aliases": [
        "CRAO",
        "BRAO",
        "eye stroke",
        "retinal artery blockage"
    ],
    "intro": "Retinal artery occlusion is sudden interruption of arterial blood flow to the retina.",
    "overview": [
        "Retinal artery occlusion is sudden interruption of arterial blood flow to the retina.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Sudden painless vision loss",
        "Usually one eye",
        "May be severe"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Arterial blockage",
            "text": "An embolus or other vascular event reduces retinal blood supply."
        }
    ],
    "riskFactors": [
        "Cardiovascular disease",
        "Carotid disease",
        "Vascular risk factors"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "lattice-degeneration",
    "name": "Lattice Degeneration",
    "category": "retina-macula",
    "frequency": "Uncommon",
    "careTag": "Routine monitoring unless new flashes/floaters",
    "aliases": [
        "lattice retina",
        "thin peripheral retina"
    ],
    "intro": "Lattice degeneration is an area of peripheral retinal thinning that is associated with an increased risk of retinal tears in some eyes.",
    "overview": [
        "Lattice degeneration is an area of peripheral retinal thinning that is associated with an increased risk of retinal tears in some eyes.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually no symptoms",
        "May coexist with flashes or floaters from vitreous change"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Peripheral retinal thinning",
            "text": "Characteristic elongated areas develop in the far retina."
        }
    ],
    "riskFactors": [
        "Myopia",
        "Family or personal retinal-detachment history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [
        "retinal-tear",
        "retinal-detachment"
    ],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "retinitis-pigmentosa",
    "name": "Retinitis Pigmentosa",
    "category": "retina-macula",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "RP",
        "tunnel vision inherited"
    ],
    "intro": "Retinitis pigmentosa is a group of inherited retinal diseases that progressively affect photoreceptors.",
    "overview": [
        "Retinitis pigmentosa is a group of inherited retinal diseases that progressively affect photoreceptors.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Night blindness",
        "Progressive peripheral vision loss",
        "Difficulty adapting to darkness",
        "Later central vision loss in some types"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inherited retinal degeneration",
            "text": "Genetic variants impair retinal cells."
        }
    ],
    "riskFactors": [
        "Family history may be present"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Retinitis Pigmentosa",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/retinitis-pigmentosa"
        }
    ],
    "categories": [
        "retina-macula",
        "genetic-inherited"
    ]
},

{
    "id": "stargardt-disease",
    "name": "Stargardt Disease",
    "category": "retina-macula",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "juvenile macular degeneration",
        "Stargardt"
    ],
    "intro": "Stargardt disease is an inherited macular degeneration that often begins in childhood, adolescence, or young adulthood.",
    "overview": [
        "Stargardt disease is an inherited macular degeneration that often begins in childhood, adolescence, or young adulthood.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Progressive central vision loss",
        "Difficulty reading",
        "Color-vision changes",
        "Light sensitivity in some people"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inherited retinal disease",
            "text": "Genetic changes cause toxic byproducts to accumulate in retinal cells."
        }
    ],
    "riskFactors": [
        "Genetic inheritance"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "retina-macula",
        "genetic-inherited"
    ]
},

{
    "id": "retinopathy-of-prematurity",
    "name": "Retinopathy of Prematurity",
    "category": "retina-macula",
    "frequency": "Uncommon overall",
    "careTag": "Specialized infant screening",
    "aliases": [
        "ROP",
        "premature baby retina"
    ],
    "intro": "Retinopathy of prematurity is abnormal retinal blood-vessel development in babies born prematurely.",
    "overview": [
        "Retinopathy of prematurity is abnormal retinal blood-vessel development in babies born prematurely.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually detected by screening rather than symptoms",
        "Advanced disease can threaten vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Premature retinal vascular development",
            "text": "Retinal vessels grow abnormally after very premature birth."
        }
    ],
    "riskFactors": [
        "Premature birth",
        "Low birth weight"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "retina-macula",
        "genetic-inherited"
    ]
},

{
    "id": "glaucoma-pressure-conditions",
    "name": "Glaucoma & Eye Pressure Conditions",
    "category": "glaucoma-pressure",
    "frequency": "Common as a group",
    "careTag": "Regular eye exams",
    "aliases": [
        "glaucoma",
        "high eye pressure"
    ],
    "intro": "Glaucoma is a group of optic-nerve diseases often associated with eye pressure and characteristic loss of peripheral vision.",
    "overview": [
        "Glaucoma is a group of optic-nerve diseases often associated with eye pressure and characteristic loss of peripheral vision.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Often no early symptoms",
        "Peripheral vision loss",
        "Advanced tunnel vision",
        "Acute angle closure can cause severe pain and blur"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Optic-nerve injury",
            "text": "Pressure and pressure-independent factors can damage retinal ganglion cells and the optic nerve."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Family history",
        "Certain ancestry groups",
        "Thin cornea",
        "High eye pressure"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "ocular-hypertension",
    "name": "Ocular Hypertension",
    "category": "glaucoma-pressure",
    "frequency": "Common",
    "careTag": "Monitoring recommended",
    "aliases": [
        "OHT",
        "high IOP"
    ],
    "intro": "Ocular hypertension means eye pressure is higher than the typical range without detectable glaucomatous optic-nerve damage.",
    "overview": [
        "Ocular hypertension means eye pressure is higher than the typical range without detectable glaucomatous optic-nerve damage.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually no symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Elevated intraocular pressure",
            "text": "Fluid production and drainage are not balanced at the measured pressure."
        }
    ],
    "riskFactors": [
        "Family history of glaucoma",
        "Thin cornea",
        "Increasing age"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "primary-open-angle-glaucoma",
    "name": "Primary Open-Angle Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Common",
    "careTag": "Ongoing monitoring/treatment",
    "aliases": [
        "POAG",
        "open angle glaucoma"
    ],
    "intro": "Primary open-angle glaucoma is the most common glaucoma type and usually progresses slowly without early symptoms.",
    "overview": [
        "Primary open-angle glaucoma is the most common glaucoma type and usually progresses slowly without early symptoms.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually no early symptoms",
        "Gradual peripheral vision loss",
        "Advanced tunnel vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Progressive optic-nerve damage",
            "text": "The drainage angle is open, but pressure-related and other factors damage the optic nerve."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Family history",
        "Elevated eye pressure",
        "Certain ancestry groups"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "normal-tension-glaucoma",
    "name": "Normal-Tension Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Uncommon",
    "careTag": "Ongoing monitoring/treatment",
    "aliases": [
        "NTG",
        "low tension glaucoma"
    ],
    "intro": "Normal-tension glaucoma causes characteristic optic-nerve damage even though measured eye pressure is not consistently above the usual range.",
    "overview": [
        "Normal-tension glaucoma causes characteristic optic-nerve damage even though measured eye pressure is not consistently above the usual range.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually no early symptoms",
        "Gradual peripheral vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Optic-nerve susceptibility",
            "text": "The nerve can be damaged at pressures tolerated by many other eyes."
        }
    ],
    "riskFactors": [
        "Family history",
        "Vascular factors in some people"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "angle-closure-glaucoma",
    "name": "Angle-Closure Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Uncommon",
    "careTag": "Emergency if acute symptoms",
    "aliases": [
        "closed angle glaucoma",
        "acute glaucoma"
    ],
    "intro": "Angle-closure glaucoma occurs when the iris blocks the eye's drainage angle; an acute attack can cause a rapid pressure rise.",
    "overview": [
        "Angle-closure glaucoma occurs when the iris blocks the eye's drainage angle; an acute attack can cause a rapid pressure rise.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Severe eye pain in acute attacks",
        "Red eye",
        "Blur",
        "Halos",
        "Headache",
        "Nausea or vomiting"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Drainage-angle closure",
            "text": "The iris obstructs aqueous outflow."
        }
    ],
    "riskFactors": [
        "Narrow angles",
        "Hyperopia",
        "Increasing age",
        "Certain eye anatomy"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "pseudoexfoliation-glaucoma",
    "name": "Pseudoexfoliation Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Uncommon",
    "careTag": "Ongoing glaucoma care",
    "aliases": [
        "PXG",
        "exfoliation glaucoma"
    ],
    "intro": "Pseudoexfoliation glaucoma is open-angle glaucoma associated with abnormal fibrillar material accumulating in the front of the eye.",
    "overview": [
        "Pseudoexfoliation glaucoma is open-angle glaucoma associated with abnormal fibrillar material accumulating in the front of the eye.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Usually no early symptoms",
        "Peripheral vision loss later"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Pseudoexfoliative material and drainage dysfunction",
            "text": "Deposited material and pigment can impair aqueous outflow."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Genetic susceptibility"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "pigmentary-glaucoma",
    "name": "Pigmentary Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Uncommon",
    "careTag": "Ongoing glaucoma care",
    "aliases": [
        "pigment glaucoma",
        "pigment dispersion"
    ],
    "intro": "Pigmentary glaucoma occurs when pigment released from the back of the iris contributes to drainage-system blockage and optic-nerve damage.",
    "overview": [
        "Pigmentary glaucoma occurs when pigment released from the back of the iris contributes to drainage-system blockage and optic-nerve damage.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Often no early symptoms",
        "Occasional halos or blur with pressure spikes",
        "Peripheral loss later"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Pigment dispersion",
            "text": "Iris pigment accumulates in the trabecular meshwork."
        }
    ],
    "riskFactors": [
        "Myopia",
        "Pigment dispersion syndrome"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ]
},

{
    "id": "secondary-glaucoma",
    "name": "Secondary Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Uncommon",
    "careTag": "Depends on cause",
    "aliases": [
        "secondary high pressure"
    ],
    "intro": "Secondary glaucoma is optic-nerve damage from elevated pressure caused by another eye condition, injury, medication, or surgery.",
    "overview": [
        "Secondary glaucoma is optic-nerve damage from elevated pressure caused by another eye condition, injury, medication, or surgery.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Often no early symptoms",
        "Symptoms depend on cause",
        "Peripheral vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Another ocular process raises pressure",
            "text": "Inflammation, injury, abnormal vessels, lens disease, medication, or surgery can interfere with drainage."
        }
    ],
    "riskFactors": [
        "Uveitis",
        "Eye trauma",
        "Steroid exposure",
        "Retinal vascular disease"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ],
    "categories": [
        "glaucoma-pressure",
        "inflammation",
        "injury-exposure"
    ]
},

{
    "id": "congenital-glaucoma",
    "name": "Primary Congenital Glaucoma",
    "category": "glaucoma-pressure",
    "frequency": "Rare",
    "careTag": "Prompt pediatric ophthalmology care",
    "aliases": [
        "baby glaucoma",
        "childhood glaucoma"
    ],
    "intro": "Primary congenital glaucoma is a rare childhood glaucoma caused by abnormal development of the eye's drainage system.",
    "overview": [
        "Primary congenital glaucoma is a rare childhood glaucoma caused by abnormal development of the eye's drainage system.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Excess tearing",
        "Light sensitivity",
        "Cloudy or enlarged cornea",
        "Eye enlargement in infants"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Abnormal drainage-angle development",
            "text": "Aqueous fluid cannot drain normally."
        }
    ],
    "riskFactors": [
        "Genetic factors in some families"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Glaucoma",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/glaucoma"
        }
    ],
    "categories": [
        "glaucoma-pressure",
        "genetic-inherited"
    ]
},

{
    "id": "optic-nerve-conditions",
    "name": "Optic Nerve Conditions",
    "category": "optic-nerve",
    "frequency": "Varies",
    "careTag": "Prompt evaluation for new loss",
    "aliases": [
        "optic nerve problem",
        "optic neuropathy"
    ],
    "intro": "The optic nerve carries visual information from the retina to the brain; damage can affect acuity, color, contrast, pupils, and visual fields.",
    "overview": [
        "The optic nerve carries visual information from the retina to the brain; damage can affect acuity, color, contrast, pupils, and visual fields.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Blur or vision loss",
        "Color desaturation",
        "Visual-field loss",
        "Abnormal pupil response",
        "Pain with eye movement in some conditions"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inflammation",
            "text": "Optic neuritis can inflame the nerve."
        },
        {
            "title": "Blood-flow loss",
            "text": "Ischemic optic neuropathy can injure nerve tissue."
        },
        {
            "title": "Pressure or inherited disease",
            "text": "Glaucoma, compression, and genetic disease can also damage the nerve."
        }
    ],
    "riskFactors": [
        "Varies by condition"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "ischemic-optic-neuropathy",
    "name": "Ischemic Optic Neuropathy",
    "category": "optic-nerve",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation",
    "aliases": [
        "AION",
        "NAION",
        "optic nerve stroke"
    ],
    "intro": "Ischemic optic neuropathy is optic-nerve injury caused by inadequate blood supply.",
    "overview": [
        "Ischemic optic neuropathy is optic-nerve injury caused by inadequate blood supply.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Sudden painless vision loss",
        "Altitudinal or other field defect",
        "One eye often affected"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Reduced optic-nerve blood flow",
            "text": "Circulatory interruption damages nerve fibers."
        }
    ],
    "riskFactors": [
        "Increasing age",
        "Vascular risk factors",
        "Sleep apnea",
        "Certain optic-disc anatomy"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "arteritic-aion",
    "name": "Arteritic Anterior Ischemic Optic Neuropathy",
    "category": "optic-nerve",
    "frequency": "Rare",
    "careTag": "Emergency evaluation",
    "aliases": [
        "AAION",
        "giant cell arteritis eye"
    ],
    "intro": "Arteritic AION is an emergency form of ischemic optic neuropathy, most often associated with giant cell arteritis.",
    "overview": [
        "Arteritic AION is an emergency form of ischemic optic neuropathy, most often associated with giant cell arteritis.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Sudden severe painless vision loss",
        "May have headache or scalp tenderness",
        "Jaw symptoms or systemic symptoms may occur"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inflamed arteries reduce optic-nerve blood flow",
            "text": "Giant cell arteritis can obstruct circulation to the nerve."
        }
    ],
    "riskFactors": [
        "Usually age 50 or older",
        "Giant cell arteritis"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "optic-disc-drusen",
    "name": "Optic Disc Drusen",
    "category": "optic-nerve",
    "frequency": "Uncommon",
    "careTag": "Usually monitoring",
    "aliases": [
        "optic nerve drusen",
        "buried drusen"
    ],
    "intro": "Optic disc drusen are calcified deposits within the optic nerve head that can make the disc appear elevated.",
    "overview": [
        "Optic disc drusen are calcified deposits within the optic nerve head that can make the disc appear elevated.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Often no symptoms",
        "Peripheral field defects in some people",
        "Rare transient visual symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Calcified deposits",
            "text": "Material accumulates within a crowded optic nerve head."
        }
    ],
    "riskFactors": [
        "Family tendency in some cases"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "papilledema",
    "name": "Papilledema",
    "category": "optic-nerve",
    "frequency": "Rare",
    "careTag": "Urgent medical evaluation",
    "aliases": [
        "swollen optic nerves pressure",
        "papilledema headache"
    ],
    "intro": "Papilledema is optic-disc swelling caused by increased pressure around the brain.",
    "overview": [
        "Papilledema is optic-disc swelling caused by increased pressure around the brain.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Headache may occur",
        "Brief visual dimming",
        "Double vision in some cases",
        "Optic discs swollen in both eyes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Raised intracranial pressure",
            "text": "Pressure is transmitted along the optic-nerve sheath."
        }
    ],
    "riskFactors": [
        "Any condition that raises intracranial pressure"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "optic-nerve-hypoplasia",
    "name": "Optic Nerve Hypoplasia",
    "category": "optic-nerve",
    "frequency": "Rare",
    "careTag": "Pediatric/neuro-ophthalmic evaluation",
    "aliases": [
        "small optic nerve",
        "ONH"
    ],
    "intro": "Optic nerve hypoplasia is underdevelopment of one or both optic nerves from early development.",
    "overview": [
        "Optic nerve hypoplasia is underdevelopment of one or both optic nerves from early development.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Reduced vision",
        "Nystagmus",
        "Strabismus",
        "Variable field loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Developmental undergrowth",
            "text": "The optic nerve contains fewer axons than usual."
        }
    ],
    "riskFactors": [
        "Developmental factors; sometimes associated with broader neurologic or endocrine abnormalities"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "optic-nerve",
        "genetic-inherited"
    ]
},

{
    "id": "dominant-optic-atrophy",
    "name": "Dominant Optic Atrophy",
    "category": "optic-nerve",
    "frequency": "Rare",
    "careTag": "Genetic/neuro-ophthalmic evaluation",
    "aliases": [
        "DOA",
        "OPA1 optic atrophy"
    ],
    "intro": "Dominant optic atrophy is an inherited optic neuropathy that often causes gradual bilateral central vision and color-vision loss.",
    "overview": [
        "Dominant optic atrophy is an inherited optic neuropathy that often causes gradual bilateral central vision and color-vision loss.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Gradual central blur",
        "Color-vision difficulty",
        "Reduced visual acuity",
        "Usually both eyes"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "OPA1-related mitochondrial dysfunction",
            "text": "Inherited changes damage retinal ganglion cells and optic-nerve fibers."
        }
    ],
    "riskFactors": [
        "Family history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "optic-nerve",
        "genetic-inherited"
    ]
},

{
    "id": "leber-hereditary-optic-neuropathy",
    "name": "Leber Hereditary Optic Neuropathy",
    "category": "optic-nerve",
    "frequency": "Rare",
    "careTag": "Prompt neuro-ophthalmic evaluation",
    "aliases": [
        "LHON",
        "Leber optic neuropathy"
    ],
    "intro": "Leber hereditary optic neuropathy is a mitochondrial inherited disorder causing subacute central vision loss, often in young adults.",
    "overview": [
        "Leber hereditary optic neuropathy is a mitochondrial inherited disorder causing subacute central vision loss, often in young adults.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur or blind spot",
        "Color loss",
        "Second eye often becomes involved"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Mitochondrial DNA variants",
            "text": "Retinal ganglion cells and optic nerves become dysfunctional."
        }
    ],
    "riskFactors": [
        "Maternal mitochondrial inheritance",
        "Genetic susceptibility"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "optic-nerve",
        "genetic-inherited"
    ]
},

{
    "id": "ocular-inflammation-conditions",
    "name": "Ocular Inflammation",
    "category": "inflammation",
    "frequency": "Varies",
    "careTag": "Prompt evaluation",
    "aliases": [
        "eye inflammation",
        "uveitis"
    ],
    "intro": "Inflammatory eye disease can involve the iris, ciliary body, choroid, retina, sclera, cornea, or several structures together.",
    "overview": [
        "Inflammatory eye disease can involve the iris, ciliary body, choroid, retina, sclera, cornea, or several structures together.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Pain",
        "Redness",
        "Light sensitivity",
        "Floaters",
        "Blur",
        "Vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Immune inflammation",
            "text": "The immune system may react to infection or attack ocular tissue."
        },
        {
            "title": "Infection",
            "text": "Some infectious diseases directly trigger intraocular inflammation."
        }
    ],
    "riskFactors": [
        "Autoimmune disease",
        "Infection",
        "Prior ocular inflammation"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ]
},

{
    "id": "anterior-uveitis",
    "name": "Anterior Uveitis / Iritis",
    "category": "inflammation",
    "frequency": "Uncommon",
    "careTag": "Prompt eye exam",
    "aliases": [
        "iritis",
        "front uveitis"
    ],
    "intro": "Anterior uveitis is inflammation primarily involving the iris and front portion of the uvea.",
    "overview": [
        "Anterior uveitis is inflammation primarily involving the iris and front portion of the uvea.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Eye pain",
        "Redness near the cornea",
        "Light sensitivity",
        "Blur",
        "Small or irregular pupil in some cases"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Immune-mediated inflammation",
            "text": "It may be isolated or associated with systemic inflammatory disease."
        },
        {
            "title": "Infection or other causes",
            "text": "Several infectious and ocular conditions can cause anterior uveitis."
        }
    ],
    "riskFactors": [
        "Autoimmune disease",
        "Prior uveitis",
        "Some infections"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ]
},

{
    "id": "intermediate-uveitis",
    "name": "Intermediate Uveitis",
    "category": "inflammation",
    "frequency": "Rare",
    "careTag": "Ophthalmic evaluation",
    "aliases": [
        "pars planitis",
        "vitritis"
    ],
    "intro": "Intermediate uveitis primarily affects the vitreous and peripheral retina/ciliary-body region.",
    "overview": [
        "Intermediate uveitis primarily affects the vitreous and peripheral retina/ciliary-body region.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Floaters",
        "Blur",
        "Usually less pain and redness than anterior uveitis"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inflammation of intermediate ocular tissues",
            "text": "Many cases are idiopathic; some associate with systemic disease."
        }
    ],
    "riskFactors": [
        "Certain inflammatory or neurologic diseases"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ]
},

{
    "id": "posterior-uveitis",
    "name": "Posterior Uveitis",
    "category": "inflammation",
    "frequency": "Rare",
    "careTag": "Prompt ophthalmic evaluation",
    "aliases": [
        "chorioretinitis",
        "back eye inflammation"
    ],
    "intro": "Posterior uveitis is inflammation affecting the retina, choroid, or both.",
    "overview": [
        "Posterior uveitis is inflammation affecting the retina, choroid, or both.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Floaters",
        "Blur",
        "Missing areas of vision",
        "Reduced vision",
        "Sometimes little external redness"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Inflammatory or infectious disease",
            "text": "The retina/choroid can be affected by autoimmune or infectious processes."
        }
    ],
    "riskFactors": [
        "Systemic inflammatory disease",
        "Certain infections"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ]
},

{
    "id": "panuveitis",
    "name": "Panuveitis",
    "category": "inflammation",
    "frequency": "Rare",
    "careTag": "Prompt ophthalmic evaluation",
    "aliases": [
        "whole eye uveitis"
    ],
    "intro": "Panuveitis is inflammation involving the anterior, intermediate, and posterior portions of the uvea.",
    "overview": [
        "Panuveitis is inflammation involving the anterior, intermediate, and posterior portions of the uvea.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Pain or redness",
        "Floaters",
        "Blur",
        "Light sensitivity",
        "Vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Widespread ocular inflammation",
            "text": "Autoimmune, infectious, or other inflammatory conditions can affect the whole uveal tract."
        }
    ],
    "riskFactors": [
        "Systemic inflammatory disease",
        "Infections"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ]
},

{
    "id": "toxoplasmosis-retinochoroiditis",
    "name": "Ocular Toxoplasmosis",
    "category": "inflammation",
    "frequency": "Uncommon",
    "careTag": "Prompt retinal/uveitis evaluation",
    "aliases": [
        "toxoplasma eye",
        "retinochoroiditis"
    ],
    "intro": "Ocular toxoplasmosis is retinal and choroidal inflammation caused by Toxoplasma infection.",
    "overview": [
        "Ocular toxoplasmosis is retinal and choroidal inflammation caused by Toxoplasma infection.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Floaters",
        "Blur",
        "Reduced vision",
        "Possible eye discomfort"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Toxoplasma gondii infection",
            "text": "The organism can reactivate in retinal tissue."
        }
    ],
    "riskFactors": [
        "Prior infection",
        "Reduced immune function can alter severity"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ],
    "categories": [
        "inflammation",
        "retina-macula"
    ]
},

{
    "id": "vkh-disease",
    "name": "Vogt–Koyanagi–Harada Disease",
    "category": "inflammation",
    "frequency": "Rare",
    "careTag": "Prompt specialist evaluation",
    "aliases": [
        "VKH",
        "Harada disease"
    ],
    "intro": "VKH is an autoimmune inflammatory disease that can affect both eyes and other pigment-containing tissues.",
    "overview": [
        "VKH is an autoimmune inflammatory disease that can affect both eyes and other pigment-containing tissues.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Bilateral blur",
        "Light sensitivity",
        "Eye pain",
        "Serous retinal detachments",
        "Possible hearing, skin, or neurologic symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Autoimmune inflammation",
            "text": "Immune activity targets melanocyte-associated tissues."
        }
    ],
    "riskFactors": [
        "Genetic susceptibility"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "NEI Uveitis",
            "url": "https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/uveitis"
        }
    ],
    "categories": [
        "inflammation",
        "retina-macula"
    ]
},

{
    "id": "neuro-eye-movement-conditions",
    "name": "Neurologic Vision & Eye Movement Conditions",
    "category": "neurologic-vision",
    "frequency": "Varies",
    "careTag": "New neurologic symptoms need prompt evaluation",
    "aliases": [
        "neuro ophthalmology",
        "eye movement nerve"
    ],
    "intro": "Neurologic eye disorders affect the nerves, brain pathways, or muscles that control vision, pupils, and eye movement.",
    "overview": [
        "Neurologic eye disorders affect the nerves, brain pathways, or muscles that control vision, pupils, and eye movement.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Double vision",
        "Abnormal eye movement",
        "Vision loss",
        "Unequal pupils",
        "Drooping eyelid",
        "Visual-field loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Cranial nerve dysfunction",
            "text": "Nerves controlling eye movement may be impaired."
        },
        {
            "title": "Brain or neuromuscular disease",
            "text": "Central pathways and neuromuscular junctions can affect ocular function."
        }
    ],
    "riskFactors": [
        "Varies widely"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "third-nerve-palsy",
    "name": "Third Cranial Nerve Palsy",
    "category": "neurologic-vision",
    "frequency": "Rare",
    "careTag": "Urgent evaluation when new",
    "aliases": [
        "CN3 palsy",
        "oculomotor palsy"
    ],
    "intro": "Third-nerve palsy affects several eye muscles, the upper eyelid, and sometimes the pupil.",
    "overview": [
        "Third-nerve palsy affects several eye muscles, the upper eyelid, and sometimes the pupil.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Double vision",
        "Drooping eyelid",
        "Eye may sit down and out",
        "Possible enlarged pupil"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Oculomotor nerve dysfunction",
            "text": "Vascular, compressive, inflammatory, traumatic, or other causes can affect the nerve."
        }
    ],
    "riskFactors": [
        "Vascular disease",
        "Aneurysm or compression",
        "Trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [
        "ptosis"
    ],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "fourth-nerve-palsy",
    "name": "Fourth Cranial Nerve Palsy",
    "category": "neurologic-vision",
    "frequency": "Uncommon",
    "careTag": "New cases need evaluation",
    "aliases": [
        "CN4 palsy",
        "trochlear palsy"
    ],
    "intro": "Fourth-nerve palsy weakens the superior oblique muscle and often causes vertical or tilted double vision.",
    "overview": [
        "Fourth-nerve palsy weakens the superior oblique muscle and often causes vertical or tilted double vision.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Vertical double vision",
        "Images may look tilted",
        "Head tilt may reduce symptoms",
        "Difficulty looking down in some positions"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Trochlear nerve dysfunction",
            "text": "Congenital weakness, trauma, vascular disease, or other neurologic causes can affect the nerve."
        }
    ],
    "riskFactors": [
        "Congenital tendency",
        "Head trauma",
        "Vascular risk factors"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "sixth-nerve-palsy",
    "name": "Sixth Cranial Nerve Palsy",
    "category": "neurologic-vision",
    "frequency": "Uncommon",
    "careTag": "New cases need prompt evaluation",
    "aliases": [
        "CN6 palsy",
        "abducens palsy"
    ],
    "intro": "Sixth-nerve palsy weakens the lateral rectus muscle, making outward movement of one eye difficult.",
    "overview": [
        "Sixth-nerve palsy weakens the lateral rectus muscle, making outward movement of one eye difficult.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Horizontal double vision",
        "Worse looking toward affected side",
        "Eye may turn inward"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Abducens nerve dysfunction",
            "text": "Vascular, pressure-related, inflammatory, traumatic, or compressive causes can affect the nerve."
        }
    ],
    "riskFactors": [
        "Vascular risk factors",
        "Raised intracranial pressure",
        "Trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "ocular-myasthenia",
    "name": "Ocular Myasthenia Gravis",
    "category": "neurologic-vision",
    "frequency": "Rare",
    "careTag": "Medical evaluation",
    "aliases": [
        "myasthenia eye",
        "fluctuating ptosis"
    ],
    "intro": "Ocular myasthenia causes fluctuating weakness of the eyelid and eye-movement muscles.",
    "overview": [
        "Ocular myasthenia causes fluctuating weakness of the eyelid and eye-movement muscles.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Variable drooping eyelid",
        "Double vision that changes",
        "Symptoms often worsen with fatigue"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Neuromuscular-junction autoimmunity",
            "text": "Signals between nerves and muscles become less effective."
        }
    ],
    "riskFactors": [
        "Autoimmune susceptibility"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [
        "ptosis"
    ],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "nystagmus",
    "name": "Nystagmus",
    "category": "neurologic-vision",
    "frequency": "Uncommon",
    "careTag": "New acquired nystagmus needs evaluation",
    "aliases": [
        "shaking eyes",
        "jiggling vision"
    ],
    "intro": "Nystagmus is involuntary rhythmic eye movement that can be congenital or acquired.",
    "overview": [
        "Nystagmus is involuntary rhythmic eye movement that can be congenital or acquired.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Eyes move repetitively",
        "Reduced vision in some types",
        "Head position may change symptoms",
        "Acquired nystagmus may cause oscillopsia"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Developmental or sensory causes",
            "text": "Some nystagmus begins in infancy."
        },
        {
            "title": "Neurologic, medication, or vestibular causes",
            "text": "Acquired nystagmus has a different range of causes."
        }
    ],
    "riskFactors": [
        "Childhood visual disorders",
        "Neurologic disease for acquired forms"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "neurologic-vision",
        "genetic-inherited"
    ]
},

{
    "id": "internuclear-ophthalmoplegia",
    "name": "Internuclear Ophthalmoplegia",
    "category": "neurologic-vision",
    "frequency": "Rare",
    "careTag": "Prompt neurologic evaluation",
    "aliases": [
        "INO",
        "MLF lesion"
    ],
    "intro": "Internuclear ophthalmoplegia is an eye-movement disorder caused by injury to a brainstem pathway coordinating horizontal gaze.",
    "overview": [
        "Internuclear ophthalmoplegia is an eye-movement disorder caused by injury to a brainstem pathway coordinating horizontal gaze.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Double vision",
        "One eye has reduced inward movement",
        "Other eye may show abducting nystagmus"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Medial longitudinal fasciculus lesion",
            "text": "Demyelination, stroke, or another brainstem process disrupts coordinated gaze."
        }
    ],
    "riskFactors": [
        "Multiple sclerosis in younger adults",
        "Stroke in older adults"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "homonymous-hemianopia",
    "name": "Homonymous Hemianopia",
    "category": "neurologic-vision",
    "frequency": "Uncommon",
    "careTag": "Sudden onset is an emergency",
    "aliases": [
        "hemianopia",
        "half vision missing"
    ],
    "intro": "Homonymous hemianopia is loss of the same side of the visual field in both eyes from damage behind the optic chiasm.",
    "overview": [
        "Homonymous hemianopia is loss of the same side of the visual field in both eyes from damage behind the optic chiasm.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Missing right or left half of visual world",
        "Bumping into objects on one side",
        "Reading difficulty"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Brain visual-pathway injury",
            "text": "Stroke, tumor, trauma, or other neurologic disease can affect the optic tract, radiations, or visual cortex."
        }
    ],
    "riskFactors": [
        "Stroke and other neurologic disease"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "visual-migraine-aura",
    "name": "Migraine Visual Aura",
    "category": "neurologic-vision",
    "frequency": "Common",
    "careTag": "First or atypical episodes need medical assessment",
    "aliases": [
        "ocular migraine",
        "zigzag vision",
        "scintillating scotoma"
    ],
    "intro": "Migraine aura can cause temporary visual phenomena generated by the brain, sometimes with and sometimes without headache.",
    "overview": [
        "Migraine aura can cause temporary visual phenomena generated by the brain, sometimes with and sometimes without headache.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Temporary zigzags or shimmering",
        "Expanding blind spot",
        "Usually affects the visual field of both eyes",
        "Typically resolves"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Transient cortical neurologic activity",
            "text": "Migraine aura arises from the visual brain rather than the eye itself."
        }
    ],
    "riskFactors": [
        "Migraine history",
        "Family history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "eye-injury-exposure-conditions",
    "name": "Eye Injury & Exposure",
    "category": "injury-exposure",
    "frequency": "Common as a group",
    "careTag": "Significant injuries need urgent evaluation",
    "aliases": [
        "eye injury",
        "eye trauma"
    ],
    "intro": "Eye injuries range from surface irritation to chemical burns, penetrating trauma, bleeding, retinal injury, and orbital fractures.",
    "overview": [
        "Eye injuries range from surface irritation to chemical burns, penetrating trauma, bleeding, retinal injury, and orbital fractures.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Pain",
        "Redness",
        "Blur",
        "Light sensitivity",
        "Bleeding",
        "Abnormal pupil",
        "Double vision"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Mechanical trauma",
            "text": "Blunt, sharp, or high-speed objects can damage multiple eye structures."
        },
        {
            "title": "Chemical or radiation exposure",
            "text": "Chemicals and intense light can injure the ocular surface."
        }
    ],
    "riskFactors": [
        "Work, sports, accidents, chemical exposure"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "chemical-eye-injury",
    "name": "Chemical Eye Injury",
    "category": "injury-exposure",
    "frequency": "Uncommon",
    "careTag": "Emergency first aid and evaluation",
    "aliases": [
        "chemical burn eye",
        "cleaner in eye"
    ],
    "intro": "A chemical eye injury occurs when an irritating or corrosive chemical contacts the ocular surface.",
    "overview": [
        "A chemical eye injury occurs when an irritating or corrosive chemical contacts the ocular surface.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Immediate burning or pain",
        "Redness",
        "Tearing",
        "Blur",
        "Light sensitivity"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Chemical exposure",
            "text": "Acids, alkalis, and other chemicals can injure the conjunctiva and cornea."
        }
    ],
    "riskFactors": [
        "Workplace or household chemical accidents"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "open-globe-injury",
    "name": "Open-Globe Injury",
    "category": "injury-exposure",
    "frequency": "Rare",
    "careTag": "Emergency",
    "aliases": [
        "ruptured globe",
        "penetrating eye injury"
    ],
    "intro": "An open-globe injury is a full-thickness wound of the cornea or sclera and is a vision-threatening emergency.",
    "overview": [
        "An open-globe injury is a full-thickness wound of the cornea or sclera and is a vision-threatening emergency.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Severe injury history",
        "Vision loss",
        "Eye pain",
        "Abnormal pupil or eye appearance",
        "Possible fluid or tissue disruption"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Penetrating or blunt trauma",
            "text": "The wall of the eye ruptures or is lacerated."
        }
    ],
    "riskFactors": [
        "Sharp objects",
        "High-speed projectiles",
        "Severe blunt trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "hyphema",
    "name": "Hyphema",
    "category": "injury-exposure",
    "frequency": "Uncommon",
    "careTag": "Urgent eye evaluation",
    "aliases": [
        "blood inside eye",
        "traumatic hyphema"
    ],
    "intro": "A hyphema is blood in the front chamber of the eye, commonly after blunt trauma.",
    "overview": [
        "A hyphema is blood in the front chamber of the eye, commonly after blunt trauma.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Visible blood or haziness",
        "Eye pain",
        "Blur",
        "Light sensitivity"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Bleeding from iris or ciliary-body vessels",
            "text": "Trauma commonly tears small vessels."
        }
    ],
    "riskFactors": [
        "Blunt eye injury",
        "Certain blood disorders or medications"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "traumatic-iritis",
    "name": "Traumatic Iritis",
    "category": "injury-exposure",
    "frequency": "Uncommon",
    "careTag": "Prompt eye evaluation",
    "aliases": [
        "iritis after injury"
    ],
    "intro": "Traumatic iritis is inflammation of the iris after blunt eye injury.",
    "overview": [
        "Traumatic iritis is inflammation of the iris after blunt eye injury.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Aching eye pain",
        "Light sensitivity",
        "Redness",
        "Blur",
        "Symptoms may develop after the injury"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Blunt trauma triggers anterior uveal inflammation",
            "text": "The iris and ciliary body become inflamed."
        }
    ],
    "riskFactors": [
        "Recent blunt eye injury"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "injury-exposure",
        "inflammation"
    ]
},

{
    "id": "commotio-retinae",
    "name": "Commotio Retinae",
    "category": "injury-exposure",
    "frequency": "Rare",
    "careTag": "Prompt dilated retinal evaluation",
    "aliases": [
        "Berlin edema",
        "retina bruise"
    ],
    "intro": "Commotio retinae is transient retinal whitening and photoreceptor injury after blunt trauma.",
    "overview": [
        "Commotio retinae is transient retinal whitening and photoreceptor injury after blunt trauma.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Blur or missing area of vision after impact",
        "May have other trauma symptoms"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Blunt-force shock to the retina",
            "text": "Mechanical energy disrupts outer retinal structures."
        }
    ],
    "riskFactors": [
        "Blunt eye or orbital trauma"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "injury-exposure",
        "retina-macula"
    ]
},

{
    "id": "orbital-fracture",
    "name": "Orbital Fracture",
    "category": "injury-exposure",
    "frequency": "Uncommon",
    "careTag": "Urgent evaluation when vision/movement affected",
    "aliases": [
        "blowout fracture",
        "broken eye socket"
    ],
    "intro": "An orbital fracture is a break in one or more bones surrounding the eye after facial trauma.",
    "overview": [
        "An orbital fracture is a break in one or more bones surrounding the eye after facial trauma.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Pain and swelling",
        "Double vision",
        "Numb cheek or upper lip",
        "Restricted eye movement",
        "Sunken eye later in some cases"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Blunt facial trauma",
            "text": "Force fractures thin orbital walls."
        }
    ],
    "riskFactors": [
        "Sports, falls, accidents, assault"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "photokeratitis",
    "name": "Photokeratitis",
    "category": "injury-exposure",
    "frequency": "Uncommon",
    "careTag": "Prompt evaluation if severe",
    "aliases": [
        "welder's flash",
        "snow blindness",
        "UV eye burn"
    ],
    "intro": "Photokeratitis is ultraviolet injury to the corneal surface, similar to a sunburn of the eye.",
    "overview": [
        "Photokeratitis is ultraviolet injury to the corneal surface, similar to a sunburn of the eye.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Severe gritty pain after a delay",
        "Tearing",
        "Redness",
        "Light sensitivity",
        "Blur"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Ultraviolet exposure",
            "text": "Intense UV damages corneal epithelial cells."
        }
    ],
    "riskFactors": [
        "Welding arc",
        "Snow reflection",
        "UV lamps",
        "Unprotected intense UV"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "injury-exposure",
        "dry-eye-cornea"
    ]
},

{
    "id": "thermal-eye-burn",
    "name": "Thermal Eye Burn",
    "category": "injury-exposure",
    "frequency": "Rare",
    "careTag": "Prompt/emergency depending on severity",
    "aliases": [
        "heat burn eye",
        "steam eye burn"
    ],
    "intro": "A thermal eye burn is heat-related injury to the eyelids or ocular surface.",
    "overview": [
        "A thermal eye burn is heat-related injury to the eyelids or ocular surface.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Pain",
        "Redness",
        "Swelling",
        "Surface injury",
        "Blur if cornea involved"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Heat exposure",
            "text": "Flame, hot liquid, steam, or hot material can injure ocular tissues."
        }
    ],
    "riskFactors": [
        "Thermal accidents"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "genetic-inherited-eye-conditions",
    "name": "Genetic & Inherited Eye Conditions",
    "category": "genetic-inherited",
    "frequency": "Varies",
    "careTag": "Genetic/eye evaluation",
    "aliases": [
        "genetic eye disease",
        "inherited blindness"
    ],
    "intro": "Inherited eye conditions can affect the cornea, lens, retina, optic nerve, eye development, color vision, or eye movement.",
    "overview": [
        "Inherited eye conditions can affect the cornea, lens, retina, optic nerve, eye development, color vision, or eye movement.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Symptoms vary widely",
        "Night blindness",
        "Central or peripheral vision loss",
        "Early cataract or glaucoma",
        "Abnormal eye development"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Genetic variants",
            "text": "Inherited changes can alter development or function of ocular cells and tissues."
        }
    ],
    "riskFactors": [
        "Family history may be present, but new variants can occur"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "albinism-ocular",
    "name": "Ocular Albinism",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Pediatric/genetic eye care",
    "aliases": [
        "ocular albinism",
        "OA1"
    ],
    "intro": "Ocular albinism is an inherited condition with reduced pigment in the eyes that affects visual development.",
    "overview": [
        "Ocular albinism is an inherited condition with reduced pigment in the eyes that affects visual development.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Reduced vision",
        "Nystagmus",
        "Light sensitivity",
        "Strabismus",
        "Reduced retinal pigment"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Genetic pigment-production changes",
            "text": "Melanin-related development of the retina and visual pathways is altered."
        }
    ],
    "riskFactors": [
        "Inherited genetic variant"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ]
},

{
    "id": "achromatopsia",
    "name": "Achromatopsia",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "rod monochromacy",
        "complete color blindness"
    ],
    "intro": "Achromatopsia is an inherited cone-photoreceptor disorder causing severe color-vision impairment and light sensitivity from early life.",
    "overview": [
        "Achromatopsia is an inherited cone-photoreceptor disorder causing severe color-vision impairment and light sensitivity from early life.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Marked light sensitivity",
        "Poor color discrimination",
        "Reduced central vision",
        "Nystagmus beginning in infancy"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "Cone photoreceptor dysfunction",
            "text": "Inherited variants disrupt cone signaling."
        }
    ],
    "riskFactors": [
        "Autosomal recessive inheritance in most forms"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "retina-macula"
    ]
},

{
    "id": "best-disease",
    "name": "Best Vitelliform Macular Dystrophy",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "Best disease",
        "vitelliform dystrophy"
    ],
    "intro": "Best disease is an inherited macular dystrophy characterized by abnormal material beneath the central retina.",
    "overview": [
        "Best disease is an inherited macular dystrophy characterized by abnormal material beneath the central retina.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Central blur or distortion",
        "May be detected before major symptoms",
        "Vision can vary by stage"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "BEST1-related retinal pigment epithelium dysfunction",
            "text": "Inherited changes alter macular function."
        }
    ],
    "riskFactors": [
        "Family history; often autosomal dominant"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "retina-macula"
    ]
},

{
    "id": "choroideremia",
    "name": "Choroideremia",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "CHM eye disease",
        "choroideremia retina"
    ],
    "intro": "Choroideremia is an X-linked inherited retinal degeneration affecting the choroid, retinal pigment epithelium, and photoreceptors.",
    "overview": [
        "Choroideremia is an X-linked inherited retinal degeneration affecting the choroid, retinal pigment epithelium, and photoreceptors.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Night blindness",
        "Progressive peripheral vision loss",
        "Later central vision loss"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "CHM gene variants",
            "text": "Progressive degeneration affects retinal and choroidal tissues."
        }
    ],
    "riskFactors": [
        "X-linked inheritance"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "retina-macula"
    ]
},

{
    "id": "x-linked-retinoschisis",
    "name": "X-Linked Retinoschisis",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Inherited-retina evaluation",
    "aliases": [
        "XLRS",
        "juvenile retinoschisis"
    ],
    "intro": "X-linked retinoschisis is an inherited retinal disorder in which retinal layers split, often affecting boys and young males.",
    "overview": [
        "X-linked retinoschisis is an inherited retinal disorder in which retinal layers split, often affecting boys and young males.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Reduced central vision",
        "Strabismus or nystagmus in some children",
        "Peripheral retinal complications"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "RS1 gene variants",
            "text": "Abnormal retinal structural protein leads to splitting of retinal layers."
        }
    ],
    "riskFactors": [
        "X-linked inheritance"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "retina-macula"
    ]
},

{
    "id": "aniridia",
    "name": "Aniridia",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Lifelong specialist monitoring",
    "aliases": [
        "missing iris",
        "PAX6"
    ],
    "intro": "Aniridia is a developmental eye disorder involving partial or near-complete absence of the iris and often additional eye abnormalities.",
    "overview": [
        "Aniridia is a developmental eye disorder involving partial or near-complete absence of the iris and often additional eye abnormalities.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Light sensitivity",
        "Reduced vision",
        "Nystagmus",
        "Glaucoma or corneal problems can develop"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "PAX6-related developmental abnormality",
            "text": "Eye structures do not develop typically."
        }
    ],
    "riskFactors": [
        "Often inherited; some cases are new genetic variants"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "glaucoma-pressure",
        "dry-eye-cornea"
    ]
},

{
    "id": "marfan-ocular",
    "name": "Marfan Syndrome — Ocular Findings",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Regular ophthalmic monitoring",
    "aliases": [
        "Marfan eyes",
        "lens dislocation Marfan"
    ],
    "intro": "Marfan syndrome can affect the eye, most characteristically by weakening the fibers that hold the lens in place.",
    "overview": [
        "Marfan syndrome can affect the eye, most characteristically by weakening the fibers that hold the lens in place.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "Lens displacement",
        "Blur",
        "High myopia",
        "Retinal-detachment risk"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "FBN1-related connective-tissue disorder",
            "text": "Zonular fibers and other ocular connective tissues can be affected."
        }
    ],
    "riskFactors": [
        "Marfan syndrome",
        "Family history"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": false,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "lens-cataracts",
        "retina-macula"
    ]
},

{
    "id": "retinoblastoma",
    "name": "Retinoblastoma",
    "category": "genetic-inherited",
    "frequency": "Rare",
    "careTag": "Urgent pediatric ophthalmic evaluation",
    "aliases": [
        "white pupil child",
        "leukocoria retinoblastoma"
    ],
    "intro": "Retinoblastoma is a rare retinal cancer of early childhood; some cases are hereditary.",
    "overview": [
        "Retinoblastoma is a rare retinal cancer of early childhood; some cases are hereditary.",
        "Symptoms alone cannot confirm this diagnosis. Eye examination and, for some conditions, imaging or laboratory testing are important because different eye diseases can overlap."
    ],
    "overviewDetailed": "<h3>A closer look</h3><p>This article is educational and is designed to explain the pattern an eye-care professional may consider. It is not a diagnosis from symptoms alone.</p>",
    "symptoms": [
        "White pupil reflex",
        "Eye misalignment",
        "Reduced vision",
        "Red or painful eye in advanced cases"
    ],
    "symptomsDetailed": "<h3>Symptoms can overlap</h3><p>The same symptom can come from several eye structures. Timing, which eye is affected, examination findings, and medical history help narrow the cause.</p>",
    "causes": [
        {
            "title": "RB1 gene inactivation in retinal cells",
            "text": "Tumor cells develop in the immature retina."
        }
    ],
    "riskFactors": [
        "Young childhood",
        "Heritable RB1 variant in some families"
    ],
    "causesDetailed": "<h3>Why history matters</h3><p>Age, medical conditions, medications, injury, surgery, family history, and whether one or both eyes are involved can change which causes are more likely.</p>",
    "diagnosis": "An eye-care professional uses the symptom history and a direct eye examination to distinguish this condition from other problems that can look similar.",
    "exams": [
        {
            "title": "Vision and eye examination",
            "text": "Visual acuity, pupils, eye movements, pressure when appropriate, and the front and/or back of the eye are examined."
        },
        {
            "title": "Additional testing when needed",
            "text": "Dilated examination, retinal or optic-nerve imaging, visual-field testing, ultrasound, laboratory testing, or neurologic imaging may be added depending on the suspected condition."
        }
    ],
    "diagnosisDetailed": "<h3>Confirmation matters</h3><p>Many of these conditions cannot be safely separated by a symptom questionnaire alone. The Library explains possibilities and the examinations used to distinguish them.</p>",
    "treatmentIntro": "Treatment is based on the confirmed condition rather than the symptom name alone.",
    "treatments": [
        {
            "title": "Cause-specific management",
            "text": "Treatment depends on the confirmed diagnosis, severity, and which eye structures are affected."
        },
        {
            "title": "Follow-up",
            "text": "Monitoring may be needed to make sure vision and eye health remain stable."
        }
    ],
    "treatmentDetailed": "<h3>Individualized care</h3><p>Management can range from observation or prescription medicine to laser treatment, injections, surgery, or treatment of an underlying medical condition.</p>",
    "seekCareHeading": "When to seek care",
    "seekCare": "Sudden vision loss, a new curtain or missing area of vision, severe eye pain, major trauma, chemical exposure, a new abnormal pupil, or new neurologic symptoms require prompt or emergency evaluation.",
    "urgent": true,
    "related": [],
    "sources": [
        {
            "name": "MedlinePlus Eye Diseases",
            "url": "https://medlineplus.gov/eyediseases.html"
        }
    ],
    "categories": [
        "genetic-inherited",
        "retina-macula"
    ]
}

];

// ==========================================================
// STATE
// ==========================================================

let currentCategoryId = null;
let currentConditionId = null;
let currentDetailLevel = "simple";


// ==========================================================
// HELPERS
// ==========================================================

function getCategory(categoryId) {
    return categories.find(category => category.id === categoryId);
}


function getCondition(conditionId) {
    return conditions.find(condition => condition.id === conditionId);
}


function getConditionsForCategory(categoryId) {
    return conditions.filter(condition => {
        const list = condition.categories || [condition.category];
        return list.includes(categoryId);
    });
}


function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function normalizeSearchText(value) {
    return value
        .toLowerCase()
        .replace(/[^\w\s-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function conditionSearchText(condition) {

    const pieces = [
        condition.name,
        condition.intro,
        condition.aliases.join(" "),
        condition.symptoms.join(" "),
        condition.riskFactors.join(" "),
        condition.causes.map(item => `${item.title} ${item.text}`).join(" "),
        (condition.categories || [condition.category])
            .map(id => getCategory(id)?.name || "")
            .join(" ")
    ];

    return normalizeSearchText(pieces.join(" "));
}


function searchConditions(query, categoryId = null) {

    const normalized = normalizeSearchText(query);

    let pool = categoryId
        ? getConditionsForCategory(categoryId)
        : conditions;

    if (!normalized) {
        return pool;
    }

    const terms = normalized.split(" ").filter(Boolean);

    return pool
        .map(condition => {

            const searchable = conditionSearchText(condition);

            let score = 0;

            terms.forEach(term => {

                if (normalizeSearchText(condition.name).includes(term)) {
                    score += 8;
                }

                if (condition.aliases.some(alias =>
                    normalizeSearchText(alias).includes(term)
                )) {
                    score += 6;
                }

                if (condition.symptoms.some(symptom =>
                    normalizeSearchText(symptom).includes(term)
                )) {
                    score += 5;
                }

                if (searchable.includes(term)) {
                    score += 1;
                }
            });

            return {
                condition,
                score
            };
        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(result => result.condition);
}


// ==========================================================
// CARD RENDERING
// ==========================================================

function conditionCard(condition) {

    const category = getCategory(condition.category);

    return `
        <div
            class="condition-card"
            role="button"
            tabindex="0"
            onclick="showCondition('${condition.id}')"
            onkeydown="if(event.key === 'Enter') showCondition('${condition.id}')"
        >
            <p class="condition-category">
                ${escapeHtml(category ? category.name : "")}
            </p>

            <h3>${escapeHtml(condition.name)}</h3>

            <p>${escapeHtml(condition.intro)}</p>
        </div>
    `;
}


function renderCategoryGrid() {

    const grid = document.getElementById("categoryGrid");

    grid.innerHTML = categories.map(category => {

        const available = getConditionsForCategory(category.id).length;

        const countLabel = available
            ? `${available} article${available === 1 ? "" : "s"} available`
            : "More articles coming";

        return `
            <div
                class="category-card"
                role="button"
                tabindex="0"
                onclick="showCategory('${category.id}')"
                onkeydown="if(event.key === 'Enter') showCategory('${category.id}')"
            >
                <p class="category-count">${countLabel}</p>

                <h3>${escapeHtml(category.name)}</h3>

                <p>${escapeHtml(category.description)}</p>
            </div>
        `;
    }).join("");
}


// ==========================================================
// VIEW NAVIGATION
// ==========================================================

function hideAllViews() {
    document.getElementById("libraryHome").classList.add("hidden");
    document.getElementById("categoryView").classList.add("hidden");
    document.getElementById("conditionView").classList.add("hidden");
}


function showLibraryHome(updateUrl = true) {

    currentCategoryId = null;
    currentConditionId = null;

    hideAllViews();

    document
        .getElementById("libraryHome")
        .classList.remove("hidden");

    document.getElementById("conditionSearch").value = "";

    clearSearchResults();

    if (updateUrl) {
        history.pushState({}, "", "library.html");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function showCategory(categoryId, updateUrl = true) {

    const category = getCategory(categoryId);

    if (!category) {
        showLibraryHome();
        return;
    }

    currentCategoryId = categoryId;
    currentConditionId = null;

    hideAllViews();

    document
        .getElementById("categoryView")
        .classList.remove("hidden");

    document.getElementById("categoryTitle").textContent =
        category.name;

    document.getElementById("categoryDescription").textContent =
        category.description;

    document.getElementById("categorySearch").value = "";

    renderCategoryConditions(
        getConditionsForCategory(categoryId)
    );

    if (updateUrl) {
        const params = new URLSearchParams();
        params.set("category", categoryId);
        history.pushState({}, "", `library.html?${params.toString()}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function showCondition(conditionId, updateUrl = true) {

    const condition = getCondition(conditionId);

    if (!condition) {
        showLibraryHome();
        return;
    }

    currentConditionId = conditionId;
    currentCategoryId = condition.category;

    hideAllViews();

    document
        .getElementById("conditionView")
        .classList.remove("hidden");

    renderConditionArticle(condition);

    if (updateUrl) {
        const params = new URLSearchParams();
        params.set("condition", conditionId);

        history.pushState(
            {},
            "",
            `library.html?${params.toString()}`
        );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==========================================================
// SEARCH
// ==========================================================

function clearSearchResults() {

    document
        .getElementById("searchResultsSection")
        .classList.add("hidden");

    document
        .getElementById("categorySection")
        .classList.remove("hidden");

    document.getElementById("searchResults").innerHTML = "";
}


function renderSearchResults(query) {

    if (!query.trim()) {
        clearSearchResults();
        return;
    }

    const results = searchConditions(query);

    document
        .getElementById("categorySection")
        .classList.add("hidden");

    document
        .getElementById("searchResultsSection")
        .classList.remove("hidden");

    document.getElementById("searchResultsTitle").textContent =
        results.length
            ? `${results.length} result${results.length === 1 ? "" : "s"} for “${query}”`
            : `No results for “${query}”`;

    const container =
        document.getElementById("searchResults");

    if (!results.length) {

        container.innerHTML = `
            <div class="condition-card">
                <h3>No matching article yet</h3>

                <p>
                    Try a simpler symptom or topic. The Library is designed
                    to grow, so additional articles will be added over time.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        results.map(conditionCard).join("");
}


function renderCategoryConditions(list) {

    const container =
        document.getElementById("categoryConditions");

    if (!list.length) {

        container.innerHTML = `
            <div class="condition-card">
                <h3>More articles are coming</h3>

                <p>
                    This category is part of the Library structure, but its
                    full article collection has not been added yet.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        list.map(conditionCard).join("");
}


// ==========================================================
// ARTICLE RENDERING
// ==========================================================

function renderConditionArticle(condition) {

    const category = getCategory(condition.category);

    document.getElementById("conditionTags").innerHTML = `
        <span class="tag">${escapeHtml(category?.name || "")}</span>
        <span class="tag">${escapeHtml(condition.frequency)}</span>
        <span class="tag">${escapeHtml(condition.careTag)}</span>
    `;

    document.getElementById("conditionName").textContent =
        condition.name;

    document.getElementById("conditionIntro").textContent =
        condition.intro;

    document.getElementById("overviewText").innerHTML =
        condition.overview
            .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
            .join("");

    document.getElementById("overviewDetailed").innerHTML =
        condition.overviewDetailed;

    document.getElementById("symptomGrid").innerHTML =
        condition.symptoms
            .map(symptom => `
                <div class="fact-item">
                    ${escapeHtml(symptom)}
                </div>
            `)
            .join("");

    document.getElementById("symptomsDetailed").innerHTML =
        condition.symptomsDetailed;

    document.getElementById("causeCards").innerHTML =
        condition.causes
            .map(item => stackCard(item))
            .join("");

    document.getElementById("riskList").innerHTML =
        condition.riskFactors
            .map(item => `<li>${escapeHtml(item)}</li>`)
            .join("");

    document.getElementById("causesDetailed").innerHTML =
        condition.causesDetailed;

    document.getElementById("diagnosisText").textContent =
        condition.diagnosis;

    document.getElementById("examCards").innerHTML =
        condition.exams
            .map(item => stackCard(item))
            .join("");

    document.getElementById("diagnosisDetailed").innerHTML =
        condition.diagnosisDetailed;

    document.getElementById("treatmentIntro").textContent =
        condition.treatmentIntro;

    document.getElementById("treatmentCards").innerHTML =
        condition.treatments
            .map(item => stackCard(item))
            .join("");

    document.getElementById("treatmentDetailed").innerHTML =
        condition.treatmentDetailed;

    document.getElementById("seekCareHeading").textContent =
        condition.seekCareHeading;

    document.getElementById("seekCareText").textContent =
        condition.seekCare;

    document.getElementById("seekCareBox").classList.toggle(
        "urgent",
        Boolean(condition.urgent)
    );

    renderRelatedConditions(condition);

    document.getElementById("sourceLinks").innerHTML =
        condition.sources
            .map(source => `
                <a
                    class="source-link"
                    href="${source.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${escapeHtml(source.name)} ↗
                </a>
            `)
            .join("");

    const backButton =
        document.getElementById("articleBackButton");

    backButton.onclick = () => {
        showCategory(condition.category);
    };

    setDetailLevel("simple");
}


function stackCard(item) {
    return `
        <div class="stack-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
        </div>
    `;
}


function renderRelatedConditions(condition) {

    const container =
        document.getElementById("relatedConditions");

    const related =
        condition.related
            .map(getCondition)
            .filter(Boolean);

    if (!related.length) {

        container.innerHTML = `
            <div class="condition-card">
                <h3>More related articles are coming.</h3>
                <p>
                    Related topics will appear here as the Library expands.
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        related.map(conditionCard).join("");
}


// ==========================================================
// SIMPLE / DETAILED MODE
// ==========================================================

function setDetailLevel(level) {

    currentDetailLevel = level;

    const detailed =
        level === "detailed";

    document
        .querySelectorAll(".detailed-content")
        .forEach(element => {
            element.classList.toggle("hidden", !detailed);
        });

    document
        .getElementById("simpleViewButton")
        .classList.toggle("selected", !detailed);

    document
        .getElementById("detailedViewButton")
        .classList.toggle("selected", detailed);
}


// ==========================================================
// INITIALIZATION
// ==========================================================

function loadFromUrl() {

    const params =
        new URLSearchParams(window.location.search);

    const conditionId =
        params.get("condition");

    const categoryId =
        params.get("category");

    if (conditionId && getCondition(conditionId)) {
        showCondition(conditionId, false);
        return;
    }

    if (categoryId && getCategory(categoryId)) {
        showCategory(categoryId, false);
        return;
    }

    showLibraryHome(false);
}


document.addEventListener("DOMContentLoaded", () => {

    renderCategoryGrid();

    document
        .getElementById("conditionSearch")
        .addEventListener("input", event => {
            renderSearchResults(event.target.value);
        });

    document
        .getElementById("categorySearch")
        .addEventListener("input", event => {

            const results =
                searchConditions(
                    event.target.value,
                    currentCategoryId
                );

            renderCategoryConditions(results);
        });

    loadFromUrl();
});


window.addEventListener("popstate", () => {
    loadFromUrl();
});
