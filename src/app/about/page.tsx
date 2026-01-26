'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, Users, Target, Eye, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRef } from 'react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every child deserves love, understanding, and support regardless of their circumstances.'
  },
  {
    icon: Users,
    title: 'Community-Centered',
    description: 'We believe in the power of community to heal, support, and uplift families in need.'
  },
  {
    icon: Target,
    title: 'Trauma-Informed',
    description: 'All our services are designed with deep understanding of trauma and its impact on children.'
  },
  {
    icon: Lightbulb,
    title: 'Empowerment',
    description: 'We focus on building resilience, self-esteem, and life skills that last a lifetime.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in our programs, partnerships, and outcomes.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We operate with integrity, accountability, and openness in all our work.'
  }
];






export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  const valuesRef = useRef<HTMLDivElement>(null);
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fern/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sunlit-amber/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-earth-green/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Child Arise Tennessee Logo"
                width={300}
                height={90}
                className="mx-auto h-20 w-auto"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-lato font-bold text-black mb-8">
              About{' '}
              <span className="text-fern">Child Arise</span>{' '}
              <span className="text-earth-green">Tennessee</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-6">
              Fostering hope, healing, and opportunity for children and families 
              affected by parental incarceration across Tennessee.
            </p>
            <div className="inline-flex items-center justify-center gap-2 bg-fern/10 rounded-full px-6 py-3 mb-8">
              <CheckCircle className="w-5 h-5 text-fern" />
              <span className="text-base font-semibold text-fern">Registered 501(c)(3) Nonprofit Organization</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Involved Today
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-lato font-bold text-black mb-6">Our Mission</h2>
              <p className="text-lg text-black/80 leading-relaxed mb-8">
                To provide comprehensive wraparound support to children and families affected by 
                parental incarceration—fostering stability, resilience, and opportunity through 
                targeted services, community engagement, and trauma-informed care.
              </p>
              <div className="space-y-4">
                {[
                  'Trauma-informed mental health support',
                  'Educational advocacy and tutoring',
                  'Family connection facilitation',
                  'Caregiver empowerment programs'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-fern flex-shrink-0" />
                    <span className="text-black/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-clay-beige to-earth-green/10 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-lato font-bold text-black mb-6">Our Vision</h3>
              <p className="text-lg text-black/80 leading-relaxed mb-6">
                A Tennessee where every child affected by parental incarceration has access to 
                the support, resources, and opportunities they need to thrive—regardless of 
                their family&apos;s circumstances.
              </p>
              <blockquote className="border-l-4 border-fern pl-4 italic text-black/70">
                &quot;We envision communities where these children are not defined by their parents&apos; 
                situation, but empowered to create their own bright futures.&quot;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-clay-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-black/75 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-fern/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-fern" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-black/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20 bg-clay-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-lato font-bold text-black mb-4 lg:mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg lg:text-xl text-black/75 max-w-3xl mx-auto">
              Dedicated professionals with lived experience and expertise in child advocacy.
            </p>
          </motion.div>

          {/* Bethany Roberts Mann */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-1 relative h-80 lg:h-full">
                <Image
                  src="/images/bethany.webp"
                  alt="Bethany Roberts Mann"
                  fill
                  className="object-cover object-left lg:object-[90%_center]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  Bethany Roberts Mann
                </h3>
                <div className="text-base lg:text-lg font-semibold text-fern mb-4 lg:mb-6 border-l-4 border-fern pl-4 relative z-10">
                  Founder and Executive Director
                </div>
                <div className="text-base lg:text-lg text-black/80 leading-relaxed relative z-10 space-y-4">
                  <p>
                    Bethany Mann was born in prison and adopted as a toddler. She was raised with love and stability—celebrated each year on her &quot;gotcha day,&quot; and reminded daily of that love by a wooden plaque above her bed that read:
                  </p>
                  <blockquote className="italic text-black/70 border-l-4 border-fern pl-4">
                    &quot;Not flesh of my flesh, not bone of my bone, but still miraculously my own. Never forget for a single minute that you weren&apos;t born under my heart, but in it.&quot;
                  </blockquote>
                  <p>
                    Though deeply loved, Bethany carried early memories shaped by separation, loss, and the hidden impact of parental incarceration. Her biological mother gave birth to her at age 18 while incarcerated and struggling with addiction. Bethany was placed in the custody of the Department of Human Services in Nashville.
                  </p>
                  <p>
                    The reality was hard—but the outcome, providential. Bethany was given access to education, healthcare, and emotional stability. That opportunity broke a generational cycle of poverty—and shaped her life&apos;s work.
                  </p>
                  <p>
                    For the past 15 years, she has visited men on death row and come to believe that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Proximity eradicates stigma</li>
                    <li>Telling our stories can dismantle shame</li>
                    <li>And no child should have to carry the weight of incarceration alone</li>
                  </ul>
                  <p>
                    Bethany founded Child Arise Tennessee to offer acceptance, access, and advocacy for children with an incarcerated parent—over 140,000 of them in Tennessee alone. The organization is the first in the state to focus specifically on addressing the collateral consequences these children face: shame, grief, instability, and educational disruption.
                  </p>
                  <p className="italic text-black/70 border-l-4 border-fern pl-4">
                    Bethany Mann is ACES-trained and committed to trauma-informed, child-centered practices in every phase of Child Arise&apos;s work.
                  </p>
                  <p>
                    Child Arise exists to make the invisible visible—one story, one child, one act of support at a time.
                  </p>
                  <p>
                    She&apos;s worked in law, immigration, and small business—but the accomplishment Bethany is proudest of is raising four daughters. She lives with intention every day to break cycles of poverty and build a more compassionate world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Linda Manning */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-2 relative h-80 lg:h-full">
                <Image
                  src="/images/linda.webp"
                  alt="Linda Manning, PhD"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  Linda Manning, PhD
                </h3>
                <div className="text-base lg:text-lg font-semibold text-earth-green mb-4 lg:mb-6 border-l-4 border-earth-green pl-4 relative z-10">
                  Board Member
                </div>
                <p className="text-base lg:text-lg text-black/80 leading-relaxed relative z-10">
                  Linda Manning, PhD provides supervision and consultation for therapists interested in somatic 
                  psychotherapy and working with trauma. She was an Adjunct Assistant Professor in the Human 
                  Development Counseling Program at Vanderbilt University, where she taught a course on Trauma: 
                  Impact and Intervention for twenty years. Before retiring from full-time practice in 2019, she 
                  was the Interim Director of the Osher Center for Integrative Medicine. Dr. Manning received her 
                  PhD from the University of Texas at Austin and has completed advanced training in somatic 
                  psychotherapy, mindfulness-based practices, and the treatment of trauma.
                </p>
              </div>
            </div>
          </div>

          {/* Dan Mann */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-1 relative h-80 lg:h-full">
                <Image
                  src="/images/dan.webp"
                  alt="Dan Mann"
                  fill
                  className="object-cover object-center lg:object-[80%_center]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  Dan Mann
                </h3>
                <div className="text-base lg:text-lg font-semibold text-fern mb-4 lg:mb-6 border-l-4 border-fern pl-4 relative z-10">
                  Board Member
                </div>
                <div className="relative z-10 space-y-3 lg:space-y-4">
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    For over 40 years Dan has worked in and around Nashville&apos;s music business. He began 
                    by booking Christian music acts into churches and conference centers. Booking 
                    success led to several years working in record company management and artist 
                    personal management. He is currently back in the agency business.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    During his career, his passion for social justice provided opportunities to work with 
                    Romanian orphanages, provide medical equipment to hospitals and clinics in India and 
                    to address cooperation for social justice at an ecumenical conference held at the 
                    Vatican.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Since 2010, Dan and his wife Bethany have visited the men on Tennessee&apos;s Death 
                    Row. During this time, Dan has advocated for their humane treatment before the 
                    governor, before prominent pastors, and in the press. Five times Dan has helped 
                    organize a march for mercy prior to executions in Tennessee; marching the nine miles 
                    from Death Row to the State Capitol in order to present the Governor with petitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Sally Barton-Arwood - Text Only */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="relative">
              {/* Decorative gradient header */}
              <div className="h-32 bg-gradient-to-r from-earth-green/20 via-fern/10 to-sunlit-amber/20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              </div>
              
              <div className="p-6 md:p-8 lg:p-12 -mt-16 relative z-10">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3">
                    Dr. Sally Barton-Arwood
                  </h3>
                  <div className="text-base lg:text-lg font-semibold text-earth-green mb-4 lg:mb-6 border-l-4 border-earth-green pl-4">
                    Board Member
                  </div>
                  <div className="text-base lg:text-lg text-black/80 leading-relaxed space-y-3 lg:space-y-4">
                    <p>
                      Dr. Sally Barton-Arwood brings over 30 years of experience in education, child advocacy, and 
                      trauma-informed practice to her role as a board member for Child Arise Tennessee. A lifelong 
                      educator and justice-driven leader, Sally&apos;s work is rooted in the enduring words of the prophet 
                      Micah: &quot;He has told you, O mortal, what is good; and what does the Lord require of you but to do 
                      justice, and to love kindness, and to walk humbly with your God?&quot; (Micah 6:8). These words have 
                      guided her life&apos;s calling—to walk alongside children and families with humility, to lead with 
                      compassion, and to challenge systems that fail to serve our most vulnerable.
                    </p>
                    <p>
                      As a board member of Child Arise Tennessee, Sally offers strategic insight into education systems, 
                      disability advocacy, and community-based partnerships. She believes that proximity eradicates 
                      stigma and that justice-impacted children deserve consistent relationships, meaningful 
                      opportunities, and the right to tell their own stories without shame.
                    </p>
                    <p>
                      Sally has worked directly with children and families across public, private, and nonprofit settings, 
                      including roles as a special education teacher, school administrator, and behavior specialist in Metro 
                      Nashville Public Schools. In these roles, she developed schoolwide behavior support systems and 
                      created individualized plans for children facing significant barriers to success. Her belief in the 
                      inherent worth of every child drives her commitment to inclusive practices and equitable access.
                    </p>
                    <p>
                      Currently a professor of education at Belmont University, Dr. B.—as her students affectionately call 
                      her—prepares future educators to serve with empathy, cultural humility, and purpose. Her teaching 
                      centers on trauma-informed, inclusive, and justice-centered approaches, reflecting the same values 
                      that shape Child Arise&apos;s mission. As part of her teaching, Sally founded and continues to lead a 
                      program that supports children with disabilities and their families—a space where her students 
                      engage directly in practices of inclusion, equity, and community-building.
                    </p>
                    <p>
                      Sally&apos;s research and consulting work focus on emotional and behavioral supports, service-learning, 
                      and systems that uphold the dignity of all children—particularly those affected by trauma and 
                      systemic inequities. She has published widely and presented nationally and internationally on topics 
                      such as equitable classroom practices, collaborative school culture, and inclusion.
                    </p>
                    <p>
                      Outside of her professional work, Sally finds renewal in the natural world, joy in cooking, and 
                      spiritual grounding in worship at Christ Church Cathedral. Whether paddling, reading, painting, or 
                      playing the piano (with more passion than precision), she embraces reflection, imagination, and 
                      community as vital parts of a well-lived life. These experiences fuel her creativity, restore her 
                      energy, and remind her of the beauty in both stillness and service.
                    </p>
                    <p>
                      Sally is honored to support Child Arise&apos;s work where children impacted by incarceration are 
                      embraced with acceptance, surrounded by advocacy, and empowered with access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Reverend Richard Wineland */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-1 relative h-80 lg:h-full">
                <Image
                  src="/images/richard.webp"
                  alt="The Reverend Richard Wineland"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  The Reverend Richard Wineland
                </h3>
                <div className="text-base lg:text-lg font-semibold text-fern mb-4 lg:mb-6 border-l-4 border-fern pl-4 relative z-10">
                  Board Member
                </div>
                <div className="relative z-10 space-y-3 lg:space-y-4">
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    The Rev. Richard Wineland grew up in Central Pennsylvania. He studied at Penn State 
                    University and Goshen College in Indiana, graduating with a bachelor&apos;s degree in music 
                    performance. He received a Master of Divinity degree from Mennonite Theological 
                    Seminary in Indiana, and an MA equivalent in Psychology from Andrews University in 
                    Michigan. Currently he is completing a Doctor of Ministry degree in missional leadership 
                    and congregational development at Bexley Seabury Episcopal Seminary in Chicago.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Richard served as a Mennonite and Lutheran pastor for 10 years prior to becoming an 
                    Episcopal priest, leading congregations in Pennsylvania, Indiana, and Tennessee, and 
                    has served Episcopal parishes in Indiana and Tennessee since 2005.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Fr. Richard has been involved in many nonprofit organizations throughout his ministry, 
                    and currently serves on the Boards of the Pastoral Center for Healing and Child Arise-
                    Tennessee. He has also served on the Board of Directors of two church-wide 
                    organizations; Recovery Ministries of the Episcopal Church and the Episcopal Peace 
                    Fellowship. He was the founding Executive Director of the Community Music School of 
                    Goshen College, in Indiana.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Richard is a lifelong singer and musician, a published composer, and has performed at 
                    the Grand Ole Opry House and on national television. As a writer he has also had 
                    articles published in both academic journals and denomination-wide publications.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Richard is married to Lee Armstrong, a musician, poet, and registered nurse. Together 
                    they have seven adult children, scattered from New York City to Los Angeles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Libby Dayhuff */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-2 relative h-80 lg:h-full">
                <Image
                  src="/images/libby.webp"
                  alt="Libby Dayhuff"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  Libby Dayhuff
                </h3>
                <div className="text-base lg:text-lg font-semibold text-earth-green mb-4 lg:mb-6 border-l-4 border-earth-green pl-4 relative z-10">
                  Board Member
                </div>
                <p className="text-base lg:text-lg text-black/80 leading-relaxed relative z-10">
                  My name is Libby Dayhuff, and I am a criminal defense attorney at Larsen Law PLLC in 
                  Franklin, TN. I grew up in West Tennessee but later moved to Knoxville to attend the 
                  University of Tennessee where I completed my honors thesis on the effects of parental 
                  incarceration.
                </p>
              </div>
            </div>
          </div>

          {/* Lucy Hendrickson */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              <div className="order-1 lg:order-1 relative h-80 lg:h-full">
                <Image
                  src="/images/Lucy.JPEG"
                  alt="Lucy Hendrickson"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/20 to-white"></div>
              </div>
              
              <div className="order-2 lg:order-2 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/90 to-transparent lg:hidden"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-lato font-bold text-black mb-3 relative z-10">
                  Lucy Hendrickson
                </h3>
                <div className="text-base lg:text-lg font-semibold text-fern mb-4 lg:mb-6 border-l-4 border-fern pl-4 relative z-10">
                  Board Member
                </div>
                <div className="relative z-10 space-y-3 lg:space-y-4">
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Lucy is a Nashville native with seven years of experience at a prominent, nationally 
                    recognized nonprofit, where she built a strong foundation in advocacy, community care, 
                    and support for vulnerable populations.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Her commitment to justice and human dignity was shaped early in life through her 
                    family&apos;s meaningful relationships with individuals on death row. These relationships 
                    taught Lucy that people are more than the worst thing they have ever done, and that 
                    compassion—when practiced consistently and courageously—can be a powerful force for 
                    change.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Through her work with Child Arise, Lucy brings together professional experience and 
                    lived perspective, guided by empathy, respect, and a deep belief in the inherent worth 
                    of every person. She is especially passionate about supporting children and families 
                    impacted by incarceration and working toward systems that are more humane, responsive, 
                    and rooted in care.
                  </p>
                  <p className="text-base lg:text-lg text-black/80 leading-relaxed">
                    Lucy&apos;s work is grounded in the belief that meaningful change begins with 
                    relationship—and that when children and families are met with dignity, stability, and 
                    support, communities are strengthened for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-lato font-bold text-black mb-6">
              Join Our Mission
            </h3>
            <p className="text-lg text-black/75 mb-8 max-w-2xl mx-auto">
              Whether through volunteering, donating, or partnering with us, there are many ways 
              to support children and families affected by parental incarceration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Get Involved Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/donate">
                Make a Donation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 