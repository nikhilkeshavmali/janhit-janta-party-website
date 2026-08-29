import React from "react";
import "../assets/VisionMission.css";
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

  const ideologicalFigures = [
    "Chhatrapati Shivaji Maharaj",
    "Chhatrapati Shahu Maharaj",
    "Mahatma Jyotiba Phule",
    "Dr. Babasaheb Ambedkar",
    "Annabhau Sathe",
  ];

  return (
    <section className="vm-section">
      <div className="vm-container">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-700">
            Our Vision & Mission
          </span>

          <h1 className="mt-5 vm-main-title">
            Goals, Policies & Objectives
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-7 sm:leading-8 max-w-3xl mx-auto">
            Building a just, equal, transparent and people-oriented
            democracy focused on public welfare and inclusive development.
          </p>

          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="h-1 w-10 sm:w-16 rounded-full bg-orange-300" />
            <div className="h-1.5 w-16 sm:w-24 rounded-full bg-orange-600" />
            <div className="h-1 w-10 sm:w-16 rounded-full bg-orange-300" />
          </div>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-16">
          
          {/* VISION */}
          <div className="group vm-card p-6 sm:p-8 lg:p-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Target className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-7">
              Our vision is to establish a democratic system where every
              citizen receives equal rights, equal opportunities and
              meaningful participation in the development of the nation.
            </p>
          </div>

          {/* MISSION */}
          <div className="group vm-card p-6 sm:p-8 lg:p-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-7">
              Our mission is to bring constitutional rights and
              opportunities to every section of society and work for
              social, economic, political and educational empowerment.
            </p>
          </div>

        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-700">
            Our Objectives
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight">
            Key Goals & Policies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {objectives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group vm-card p-6 sm:p-7 lg:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-7">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VisionMission;