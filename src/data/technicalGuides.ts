export interface TechnicalGuide {
  id: string;
  tag: string;
  title: string;
  h3Title?: string;
  image: string;
  alt: string;
  ctaText: string;
  summary: string;
  content: {
    overview: string;
    sections: {
      heading: string;
      text?: string;
      bullets?: string[];
    }[];
  };
}

export const TECHNICAL_GUIDES: TechnicalGuide[] = [
  {
    id: 'guide-mortise-locks',
    tag: 'GUIDE 01 — LOCK MECHANISMS',
    title: 'Mortise Locks & Commercial Lock Cylinders',
    h3Title: 'What is a Commercial Mortise Lock?',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/img_2378.jpg?w=768',
    alt: 'Commercial storefront mortise cylinder lock with keyway',
    ctaText: 'Request Lock Repair',
    summary: 'A deep dive into heavy-duty mortise lock bodies, cylinders, deadlatches, and common failure points on aluminum storefront entrances.',
    content: {
      overview: 'A commercial mortise lock is a robust locking system recessed into a pocket or "mortise" cut directly into the edge of the aluminum door stile. Unlike standard residential cylindrical locks, commercial mortise locks provide superior strength, forced-entry resistance, and seamless integration with electric strikes and access control hardware.',
      sections: [
        {
          heading: 'Core Components of Storefront Mortise Locks',
          bullets: [
            'Mortise Lock Body: The heavy-duty internal steel case containing the operating levers, springs, and bolt throws (commonly Adams Rite 4510 or 4900 series).',
            'Mortise Lock Cylinders: Standard 1-1/8" threaded brass or bronze cylinders screwed into the stile and locked into position with hardened set-screws.',
            'Latches & Deadbolts: Heavy deadbolts, laminated steel hookbolts (for sliding doors), and deadlatches that automatically deadlock upon closing.',
            'Interior Operating Mechanisms: Ergonomic thumbturns, paddle handles (Adams Rite 4591), or lever handles meeting ADA life-safety exit requirements.',
            'Cylinder Configurations: Keyed-alike, master-keyed systems, interchangeable core (IC Core) setups, and high-security cylinders from trusted commercial brands like Schlage, Yale, Medeco, and Adams Rite.',
          ],
        },
        {
          heading: 'Common Commercial Lock Problems',
          bullets: [
            'Key Not Turning: Worn brass tumbler pins, contaminated keyways, or bent internal cams preventing the cylinder from engaging the deadlatch.',
            'Cylinders Spinning Freely: Stripped set-screws inside the door edge extrusion, allowing the entire cylinder to rotate without throwing the bolt.',
            'Sticking Deadlatch: Weather-hardened grease, internal spring fatigue, or misaligned latch projection failing to catch the strike plate.',
            'Loose Hardware: Vibration from thousands of customer door cycles shaking faceplate screws and cylinder trim rings loose.',
            'Misaligned Strike Components: Door sag causing the latch bolt to hit the strike plate lip rather than entering the cavity cleanly.',
          ],
        },
        {
          heading: 'Professional Repair & Maintenance Considerations',
          text: 'Commercial lock diagnosis begins with checking door reveal and alignment. In many cases, a lock is blamed when the actual culprit is a sagging pivot pulling the bolt off-center. Technicians inspect cylinder cams, clean and lubricate tumblers with dry graphite or synthetic grease (never gummy WD-40), realign strike plates, and re-anchor cylinder set-screws into reinforced aluminum backer plates.',
        },
      ],
    },
  },
  {
    id: 'guide-door-pivots',
    tag: 'GUIDE 02 — SUPPORT HARDWARE',
    title: 'Commercial Door Pivots & Load Distribution',
    h3Title: 'What Are Commercial Door Pivots?',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/img_2852.jpg?w=768',
    alt: 'Worn commercial door pivot and hinge hardware on aluminum frame',
    ctaText: 'Get Pivot Repair Help',
    summary: 'How offset and center-hung pivot systems bear hundreds of pounds of glass door weight, and why bearing wear causes dragging.',
    content: {
      overview: 'Commercial door pivots are heavy-duty mechanical hinge systems engineered to support the substantial weight of glass storefront doors (frequently 150 to 300+ lbs). Rather than hanging the door from standard residential butt hinges that pry outward against the jamb, pivots anchor into the floor and header, transferring vertical door load directly into the building floor slab.',
      sections: [
        {
          heading: 'Common Commercial Pivot Configurations',
          bullets: [
            '3/4" Offset Pivots: The most common commercial storefront arrangement. Hinges pivot outside the door face, allowing a full 180-degree door swing without binding.',
            'Center-Hung Pivots: Mounted directly in the center of the door rail and jamb header. Frequently paired with concealed floor closers for double-acting doors.',
            'Intermediate Pivots: Installed midway up tall or heavy doors to maintain stile verticality and prevent frame deflection.',
            'Bottom Pivot Sets: House the primary thrust needle bearings and floor plates that carry 90% of the door weight.',
            'Top Pivots: Stabilize the upper door stile with retractable spring-loaded pins that seat into the aluminum header channel.',
          ],
        },
        {
          heading: 'Warning Signs of Pivot Failure',
          bullets: [
            'Door Dragging: Bottom aluminum door shoe scraping the threshold, tile, or entryway mat.',
            'Uneven Frame Gaps: A wide gap at the top latch corner and a tight/pinched gap near the top hinge.',
            'Excessive Resistance: Door feels unnaturally heavy or binds midway through its swing arc.',
            'Grinding Metal Sounds: Needle bearings crushed into powdered metal inside the bottom pivot shoe.',
            'Loose Wobble: Noticeable play or forward-and-back tipping when moving the door by hand.',
          ],
        },
        {
          heading: 'Professional Inspection & Replacement Process',
          text: 'Technicians take the door down using specialized suction cups, inspect the bottom door rail extrusion for cracks or wallowed bolt holes, extract the failed pivot, install matching architectural pivot hardware (Kawneer, US Aluminum, Vistawall spec), and laser-level the door shoe to achieve clean 1/8" perimeter reveals.',
        },
      ],
    },
  },
  {
    id: 'guide-wind-damage',
    tag: 'GUIDE 03 — ENVIRONMENTAL IMPACT',
    title: 'Commercial Door Wind Damage & Prevention',
    h3Title: 'How High Winds Impact Commercial Entrances',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/img_3746.jpg?w=768',
    alt: 'Damaged commercial door closer hardware after strong wind exposure',
    ctaText: 'Request Wind Damage Assessment',
    summary: 'Recognizing storm and gust-induced damage across closers, pivots, frames, and safety glass, with proactive reinforcement steps.',
    content: {
      overview: 'North Texas experiences intense seasonal winds, severe thunderstorms, and sudden gusts. Storefront glass doors act like large sails; when a patron opens a door during a 40+ mph wind gust, the door can be violently ripped outward past its 90-degree stop, causing sudden catastrophic hardware failure.',
      sections: [
        {
          heading: 'Categories of Wind-Related Door Damage',
          bullets: [
            'Hydraulic Closer Blowout: Internal seals rupture from forced hyper-extension, spraying hydraulic oil across the header and eliminating closing control.',
            'Bent or Sheared Pivot Pins: Sudden lateral torsion bends the top pivot hinge pin or rips mounting screws out of the aluminum header.',
            'Frame Distortion & Twisting: The upper jamb channel twists outward, causing double doors to overlap and refuse to latch.',
            'Tempered Glass Shattering: Violent door slamming against stops creates shock waves that shatter 1/4" tempered glass panels.',
            'Damaged Pull Handles & Locks: Push/pull bars wrenched loose from the door stile under violent outward pressure.',
          ],
        },
        {
          heading: 'Preventive Measures & Hardware Upgrades',
          bullets: [
            'Backcheck Closer Regulation: Ensure overhead closers have functioning hydraulic backcheck valves to cushion opening past 70 degrees.',
            'Heavy-Duty Overhead Stops: Install surface-mounted heavy-duty overhead door stops or floor bumpers with resilient spring buffers.',
            'Grade 1 Commercial Hardware: Avoid residential-grade closers; specify cast-iron commercial bodies rated for exterior wind loads.',
            'Timely Maintenance: Repair loose mounting brackets immediately before wind forces turn loose screws into torn metal.',
          ],
        },
      ],
    },
  },
  {
    id: 'guide-sagging-gaps',
    tag: 'GUIDE 04 — ALIGNMENT & GAPS',
    title: 'Sagging Commercial Doors & Uneven Gaps',
    h3Title: 'Why Is There an Uneven Gap in My Commercial Storefront Door?',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/0135e0d4-d475-4e40-b2ba-1674fab4211e.jpeg',
    alt: 'Commercial glass storefront entrance with proper vertical door alignment',
    ctaText: 'Get Door Alignment Help',
    summary: 'Diagnosing why aluminum storefront doors drop, causes of uneven reveals, and why commercial metal doors require different solutions than wood doors.',
    content: {
      overview: 'Commercial aluminum storefront doors are precision-engineered systems. When working properly, they maintain an even 1/8" (3mm) perimeter reveal around the top header, hinge jamb, latch jamb, and bottom threshold. When a door sags, this gap becomes uneven—pinched tight in one corner and gaping open in another.',
      sections: [
        {
          heading: 'Primary Causes of Sagging Aluminum Doors',
          bullets: [
            'Worn Lower Pivot Bearings: Ball bearings flatten over time, causing the entire door leaf to settle downward.',
            'Corner Bracket Fatigue: Aluminum storefront door corners are joined by internal tie-rods and extruded shear blocks that can loosen under heavy traffic.',
            'Loose Frame Fasteners: Anchors securing the aluminum jamb into masonry or steel framing can shift under building movement.',
            'Heavy Daily Traffic Cycles: Entrances at retail stores or restaurants experience thousands of daily cycles, generating micro-vibrations.',
            'Improper Previous Adjustments: Untrained handymen turning closer adjustment screws without leveling the underlying pivot geometry.',
          ],
        },
        {
          heading: 'Consequences of Unaddressed Door Sag',
          bullets: [
            'Threshold Scraping: Door bottom rail damages polished concrete or tile thresholds and wears out weather pile seals.',
            'Security Compromise: Mortise lock deadbolts fail to line up with the frame strike hole, leaving the door unlocked.',
            'Air Infiltration & Utility Costs: Gaps allow HVAC loss and conditioned air leakage during extreme Texas summers.',
            'Glass Edge Stress: A racked or parallelogrammed aluminum door puts torsional pressure on the perimeter glass glazing, risking fracture.',
          ],
        },
        {
          heading: 'Commercial vs. Residential Distinction',
          text: 'Commercial storefront doors are extruded aluminum with structural glass, NOT residential wood doors. Generic internet advice like "planing the door edge" or "cardboard hinge shims" does not apply. Real restoration requires re-squaring internal tie-rods, replacing pivot bearings, or installing full-height continuous geared aluminum hinges.',
        },
      ],
    },
  },
  {
    id: 'guide-frame-warping',
    tag: 'GUIDE 05 — FRAME INTEGRITY',
    title: 'Commercial Door Frames & Warping',
    h3Title: 'What Causes Commercial Door Frames to Become Misaligned?',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/1530d75d-dac6-43ab-b861-72da4cebd3df.jpeg',
    alt: 'Classic Glass & Mirror technician inspecting and squaring commercial storefront frame',
    ctaText: 'Request Frame Assessment',
    summary: 'Distinguishing between minor hardware wear and structural frame displacement, building movement, and impact stresses.',
    content: {
      overview: 'The commercial door frame (jambs and header) provides the structural foundation for the entrance. When the frame is out of plumb or twisted, even brand-new pivots and locks cannot function properly. Understanding whether the issue is hardware-related or frame-related is essential for an effective repair.',
      sections: [
        {
          heading: 'Common Causes of Frame Misalignment',
          bullets: [
            'Impact & Forced Movement: Carts, delivery dollies, or vehicles bumping the entrance frame.',
            'Building Settling & Foundation Movement: Texas expansive clay soils can shift building footings, pulling jambs out of plumb.',
            'Thermal Expansion & Contraction: Long aluminum framing runs expand significantly in direct Dallas summer heat.',
            'Corroded Fasteners: Moisture at the threshold base corroding the steel masonry anchors into the slab.',
            'Improper Initial Glazing Installation: Frame installed out of square without adequate perimeter shimming or structural backing.',
          ],
        },
        {
          heading: 'Symptoms of Frame Distortion',
          bullets: [
            'Door binds at the top corner while bottom has excessive clearance.',
            'Double doors do not meet flush in the center meeting stiles.',
            'Latching requires heavy pushing or pulling from staff to seat the bolt.',
            'Perimeter perimeter sealant cracks and air/water leaks appear during rainstorms.',
          ],
        },
        {
          heading: 'Professional Alignment vs. Replacement',
          text: 'A professional glazing technician checks frame squareness with laser levels and diagonals. If the frame extrusion itself is sound, re-anchoring, shimming behind pivot backing plates, or installing reinforcement channels will resolve the problem without the massive cost of ripping out the entire storefront.',
        },
      ],
    },
  },
  {
    id: 'guide-lock-failure',
    tag: 'GUIDE 06 — SECURITY FAULTS',
    title: 'Why Commercial Door Locks Fail',
    h3Title: 'What Causes Commercial Door Lock Failure?',
    image: 'https://glassindfwtx.com/wp-content/uploads/2024/10/image-1.jpg?w=1024',
    alt: 'Commercial door lock components, cylinder cam, and internal latch mechanism',
    ctaText: 'Get Commercial Lock Help',
    summary: 'Mechanical wear, environmental corrosion, forced entry stress, and strike misalignment explained for business owners.',
    content: {
      overview: 'Commercial storefront door locks are rated for hundreds of thousands of cycles, yet they endure severe abuse daily from hasty key turns, slamming doors, temperature shifts, and tampering attempts. Recognizing the root cause of lock failure ensures the problem is permanently fixed rather than temporarily patched.',
      sections: [
        {
          heading: 'Key Drivers of Commercial Lock Failure',
          bullets: [
            'General Mechanical Fatigue: Internal brass pins, cam springs, and deadlatch scissor levers wear down over years of continuous operation.',
            'Environmental Deterioration & Dust: Airborne grit and humidity gum up dry tumblers; using oil-based sprays accelerates grime accumulation.',
            'Door & Strike Misalignment: When a door drops even 1/16", the deadbolt rubs hard against the strike cut-out, bending internal linkage bars.',
            'Forced-Entry or Tampering Stress: Pipe-wrench attacks on exposed cylinder faces or crowbar prying against the latch stile.',
            'Improper Cylinder Cam Selection: Using the wrong cam shape (cloverleaf vs. straight Adams Rite cam) that slips off the internal deadlatch drive pin.',
          ],
        },
        {
          heading: 'Maintenance Guidelines & When to Call a Professional',
          bullets: [
            'Never force a binding key; twisting harder shears the key off flush inside the cylinder keyway.',
            'Use only PTFE or dry graphite lubricants designed specifically for lock cylinders.',
            'If the cylinder spins or feels loose, call a technician immediately to retighten the hardened set-screw before the lock falls out of the door.',
            'Upgrade to hardened security cylinder collars with bevels that prevent wrenching attacks.',
          ],
        },
      ],
    },
  },
];

export const DETAILED_FAQS = [
  {
    q: 'Why is my commercial storefront door sagging?',
    a: 'Commercial storefront doors are heavy aluminum and glass assemblies that experience thousands of daily cycles. Sagging is most frequently caused by worn lower pivot bearings, loose mounting screws in the bottom door shoe, or internal tie-rod fatigue in the door frame. Over time, the door drops, causing the aluminum rail to drag across the floor and misaligning the mortise lock.',
  },
  {
    q: 'Can a damaged commercial door pivot be repaired?',
    a: 'Yes. In the majority of cases, worn or damaged commercial pivots can be replaced without replacing the entire door. We carry matching offset pivots, center-hung pivots, and intermediate hinges for all major architectural storefront systems (Kawneer, US Aluminum, Tubelite, Vistawall). A technician can replace the bearing set and realign the door in a single visit.',
  },
  {
    q: 'What causes a commercial glass door to slam?',
    a: 'A slamming door almost always indicates that the commercial hydraulic door closer has failed. Door closers use sealed hydraulic fluid to regulate closing speed and latching. When internal seals blow, fluid leaks out (often visible as oily residue on the header or threshold), hydraulic resistance is lost, and the internal spring slams the door shut violently.',
  },
  {
    q: 'Can a faulty mortise lock be repaired?',
    a: 'Yes. Commercial mortise locks (such as Adams Rite deadlatches and hookbolts) consist of modular parts. Common issues like keys not turning, spinning cylinders, or sticking latches can typically be resolved by replacing the mortise cylinder, resetting the cylinder cam, realigning the strike plate, or replacing the internal lock body.',
  },
  {
    q: 'Why is my commercial door difficult to lock?',
    a: 'Difficulty locking is usually a symptom of door alignment rather than the key itself. If the door has sagged or the frame has shifted, the lock deadbolt or deadlatch will not line up with the strike plate hole in the jamb. Forcing the key in this situation can bend the bolt or snap the key off in the cylinder.',
  },
  {
    q: 'What should I do if wind damages my storefront door?',
    a: 'High winds can hyperextend commercial doors, bending top pivot pins, breaking closer arms, or distorting aluminum frames. If your door is damaged by wind, do not force it open or wedge it. Secure the entrance if possible, keep pedestrian traffic away from strained glass, and call a commercial door repair specialist for an immediate assessment.',
  },
  {
    q: 'Can a misaligned commercial door frame be repaired?',
    a: 'In many cases, yes. Misaligned frames caused by building movement, loose masonry anchors, or minor impacts can often be re-shimmed, plumbed, and securely re-anchored. If the frame extrusion itself is severely bent or twisted beyond repair, sections of the storefront framing can be replaced.',
  },
  {
    q: 'Do you offer emergency commercial door repair?',
    a: 'Yes, Classic Glass & Mirror provides 24-hour emergency commercial door and glass service across the Dallas–Fort Worth metroplex. When an entrance cannot lock, is stuck open, or poses an immediate security risk to your business, call (682) 325-8787 for rapid dispatch.',
  },
  {
    q: 'What areas around Dallas–Fort Worth do you serve?',
    a: 'We serve businesses throughout the entire DFW metroplex, including Dallas, Fort Worth, Arlington, Plano, Irving, Frisco, Garland, Grand Prairie, McKinney, Carrollton, Denton, Richardson, Grapevine, and surrounding North Texas communities.',
  },
  {
    q: 'How do I know whether a door needs repair or replacement?',
    a: 'Most common storefront entrance problems—such as dragging doors, failing closers, broken locks, and worn pivots—can be repaired by replacing the specific hardware components. Full door replacement is generally only necessary if the aluminum stiles are severely cracked, structural frame rails are twisted beyond realignment, or you wish to upgrade to modern energy-efficient thermal storefronts.',
  },
];
