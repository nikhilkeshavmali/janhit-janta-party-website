```jsx
import React from "react";
import {
  Target,
  Users,
  Wheat,
  GraduationCap,
  Sprout,
  ShieldCheck,
  Home,
  Scale,
  Building2,
  Heart,
  Briefcase,
  Leaf,
  BookOpen,
} from "lucide-react";

const VisionMission = () => {
  const objectives = [
    {
      icon: Scale,
      title: "Constitutional Rights & Equality",
      text: "To ensure that the fundamental and constitutional rights guaranteed by the Constitution of India reach every citizen, enabling their social, economic, political, educational and overall development.",
    },
    {
      icon: Users,
      title: "Political Participation for All",
      text: "To bring every citizen into the mainstream of democratic and political participation and build a clean, transparent and people-oriented democracy where everyone receives equal rights and equal opportunities.",
    },
    {
      icon: Wheat,
      title: "Farmers & Agricultural Workers",
      text: "To protect the interests of farmers, agricultural workers, labourers and hardworking communities and ensure their participation in the state's economic development through appropriate welfare and protection policies.",
    },
    {
      icon: ShieldCheck,
      title: "Empowerment & Social Protection",
      text: "To empower and protect Nomadic and Denotified Tribes, Scheduled Castes, Scheduled Tribes, Other Backward Classes and women through effective social, economic and political development programs.",
    },
    {
      icon: GraduationCap,
      title: "Rural, Youth & Student Development",
      text: "To implement special development programs for rural communities, youth and students by strengthening education, rural infrastructure, employment opportunities, industries and transportation.",
    },
    {
      icon: Sprout,
      title: "Agricultural & Farmer Development",
      text: "To introduce progressive agricultural policies, strengthen the economic condition of farmers and promote agriculture as an important economic sector while working towards better opportunities and fair returns for farmers.",
    },
    {
      icon: Building2,
      title: "Urban Development & Public Security",
      text: "To address the challenges of rapid urbanization, inflation, unemployment, economic difficulties, corruption and public insecurity through people-oriented development projects and effective governance.",
    },
    {
      icon: Home,
      title: "Housing & Social Welfare",
      text: "To implement housing and social welfare schemes for economically weaker sections and provide dignified living conditions by considering the economic needs and difficulties of ordinary citizens.",
    },
    {
      icon: Leaf,
      title: "Environment & Sustainable Development",
      text: "To promote environmental protection, balanced development and sustainable growth while ensuring that development benefits both rural and urban communities.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            Our Vision & Mission
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
            Goals, Policies & Objectives
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building a just, equal, transparent and people-oriented
            democracy focused on public welfare and inclusive development.
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* VISION */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Our vision is to establish a democratic system where every
              citizen receives equal rights, equal opportunities and
              meaningful participation in the development of the nation.
              We aim to create a society free from social injustice,
              discrimination, corruption, political arrogance and
              dynastic politics.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              We envision an India where the voice of ordinary citizens
              is respected, constitutional values are protected and
              public welfare remains at the centre of governance.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10 hover:shadow-xl transition duration-300">

            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Our mission is to bring constitutional rights and
              opportunities to every section of society and work for
              social, economic, political and educational empowerment.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              We are committed to farmers, workers, youth, students,
              women, rural communities and marginalized sections while
              promoting transparent governance, social harmony and
              sustainable development.
            </p>
          </div>

        </div>

        {/* ================= IDEOLOGICAL FOUNDATION ================= */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10 mb-16">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>

            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                Ideological Foundation
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Our Ideological Inspiration
              </h2>
            </div>

          </div>

          <p className="text-slate-600 leading-relaxed">
            The ideological foundation of the Janhit Lokshahi Party is
            inspired by the vision of great social reformers and leaders
            who worked towards an equal, classless and discrimination-free
            society.
          </p>

          {/* IDEOLOGICAL FIGURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">

            <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
              <h3 className="font-bold text-slate-800">
                Chhatrapati Shivaji Maharaj
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
              <h3 className="font-bold text-slate-800">
                Chhatrapati Shahu Maharaj
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
              <h3 className="font-bold text-slate-800">
                Mahatma Jyotiba Phule
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
              <h3 className="font-bold text-slate-800">
                Dr. Babasaheb Ambedkar
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
              <h3 className="font-bold text-slate-800">
                Annabhau Sathe
              </h3>
            </div>

          </div>
        </div>

        {/* ================= OBJECTIVES HEADER ================= */}
        <div className="text-center mb-10">

          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            Our Objectives
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Key Goals & Policies
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Our policies focus on equality, social justice, economic
            development, education, employment, agriculture and the
            welfare of every section of society.
          </p>

        </div>

        {/* ================= OBJECTIVE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {objectives.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

        {/* ================= PUBLIC WELFARE ================= */}
        <div className="mt-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8">

              <span className="text-orange-100 font-semibold tracking-wider uppercase text-sm">
                Why Support Janhit Lokshahi Party?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3">
                A Commitment Towards Public Welfare
              </h2>

              <p className="mt-5 text-orange-50 leading-relaxed">
                We are committed to working for farmers, fair prices
                for agricultural produce, employment, freedom from
                corruption, social harmony, equality and the overall
                development of Maharashtra and India.
              </p>

              <p className="mt-4 text-orange-50 leading-relaxed">
                Our objective is to address poverty, unemployment,
                inflation and economic difficulties through effective
                public-oriented programs and responsible democratic
                governance.
              </p>

            </div>

            <div className="lg:col-span-4 flex justify-center">

              <div className="w-32 h-32 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <Briefcase className="w-14 h-14 text-white" />
              </div>

            </div>

          </div>
        </div>

        {/* ================= CONSTITUTIONAL VALUES ================= */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-10 text-center">

          <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Democracy • Equality • Justice • Public Welfare
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            Janhit Lokshahi Party is committed to constitutional values,
            social justice, equality, secularism, fraternity, transparent
            governance and the welfare of every citizen.
          </p>

        </div>

        {/* ================= MOTTO ================= */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">

          <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-3">
            Our Motto
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            "For Public Welfare – For Public Happiness"
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            "Committed to the Rights and Justice of the Bahujan Community"
          </p>

        </div>

      </div>
    </section>
  );
};

export default VisionMission;
```
