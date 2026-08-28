```jsx
import React from "react";
import {
  Award,
  Target,
  BookOpen,
  Calendar,
  MapPin,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";

const About = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            About Us
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3">
            Janhit Lokshahi Party
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A democratic movement committed to public welfare and
            fighting for the rights and justice of the Bahujan community.
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* ================= PRESIDENT PROFILE ================= */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* ===== PHOTO SECTION ===== */}
            <div className="lg:col-span-5 bg-gradient-to-br from-orange-500 to-amber-600 p-8 sm:p-10 flex flex-col items-center justify-center text-white text-center">

              <div className="relative mb-6">

                {/* PHOTO 1:
                    Place the main portrait photo of
                    Mr. Ashokrao Ramchandra Alhat here.
                */}
                <img
                  src="/ashokrao-alhat.jpg"
                  alt="Mr. Ashokrao Ramchandra Alhat"
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
                />

                <span className="absolute bottom-2 right-2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Founder / National President
                </span>
              </div>

              <h2 className="text-2xl font-bold">
                Mr. Ashokrao Ramchandra Alhat
              </h2>

              <p className="text-orange-100 font-medium mt-2">
                National President & Founder
              </p>

              <p className="text-orange-100 font-medium">
                Janhit Lokshahi Party
              </p>

              {/* BASIC INFORMATION */}
              <div className="mt-7 w-full pt-6 border-t border-orange-400/40 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm">

                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-orange-200 mt-0.5 shrink-0" />
                  <span>Date of Birth: 2 April 1966</span>
                </div>

                <div className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-orange-200 mt-0.5 shrink-0" />
                  <span>Education: B.A.</span>
                </div>

                <div className="flex items-start gap-2 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-orange-200 mt-0.5 shrink-0" />
                  <span>
                    Native Place: Dhandarfal Budruk, Taluka Sangamner /
                    Rahata, District Ahilyanagar, Maharashtra
                  </span>
                </div>

              </div>
            </div>

            {/* ===== BIOGRAPHY SECTION ===== */}
            <div className="lg:col-span-7 p-6 sm:p-10">

              <div className="flex items-center gap-2 text-orange-600 font-semibold mb-3">
                <Award className="w-5 h-5" />
                <span>Brief Introduction & Social Journey</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-5">
                From a Farmer Family to Social Leadership...
              </h2>

              <p className="text-slate-600 leading-relaxed mb-4">
                Mr. Ashokrao Ramchandra Alhat was born on 2 April 1966
                in Dhandarfal Budruk, Taluka Sangamner / Rahata,
                District Ahilyanagar, Maharashtra. Coming from an ordinary
                farming family, he completed his education through
                struggle and hard work.
              </p>

              <p className="text-slate-600 leading-relaxed mb-6">
                He actively participated in social movements and worked
                for social justice, the rights of marginalized communities,
                and the overall development of the Bahujan society.
                His long social and political journey eventually led to
                the establishment of the Janhit Lokshahi Party.
              </p>

              {/* ================= JOURNEY ================= */}
              <div className="space-y-4">

                {/* 1990 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <strong className="text-slate-800">
                      1990 — Beginning of Social Movement:
                    </strong>

                    <span className="text-slate-600">
                      {" "}
                      Began his social movement journey in Mumbai and
                      founded the "Bharatiya Kranti Sena" social organization.
                    </span>
                  </div>
                </div>

                {/* 2004-2014 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <strong className="text-slate-800">
                      2004–2014 — Political Journey:
                    </strong>

                    <span className="text-slate-600">
                      {" "}
                      Served in various positions within the Indian
                      National Congress.
                    </span>
                  </div>
                </div>

                {/* 2009 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <strong className="text-slate-800">
                      2009 — Lahujee Mahasangram:
                    </strong>

                    <span className="text-slate-600">
                      {" "}
                      Founded "Lahujee Mahasangram" to strengthen
                      the organization and representation of the
                      Matang and marginalized communities.
                    </span>
                  </div>
                </div>

                {/* 2015-2016 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <strong className="text-slate-800">
                      2015–2016 — Janhit Lokshahi Party:
                    </strong>

                    <span className="text-slate-600">
                      {" "}
                      Undertook a tour across Maharashtra and founded
                      the "Janhit Lokshahi Party" as a political
                      platform focused on public welfare and social justice.
                    </span>
                  </div>
                </div>

                {/* 2019 */}
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg mt-1 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>

                  <div>
                    <strong className="text-slate-800">
                      2019 — Assembly Elections:
                    </strong>

                    <span className="text-slate-600">
                      {" "}
                      Fielded candidates in 88 Assembly constituencies
                      across Maharashtra and contested the elections
                      independently.
                    </span>
                  </div>
                </div>

              </div>

              {/* QUOTE */}
              <div className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-lg mt-8">
                <p className="italic text-slate-700 leading-relaxed text-sm sm:text-base">
                  "Democracy is not merely about voting once every five
                  years; our goal is to build an India where the voice of
                  the common citizen reaches the highest legislative
                  institutions."
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= IDEOLOGY ================= */}
        <div className="text-center mb-10">

          <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
            Our Ideology
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
            Our Principles & Values
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Our journey is based on the principles of public welfare,
            social justice, equality, and inclusive development.
          </p>

        </div>

        {/* ================= THREE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300">

            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Ideological Legacy
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              The party follows the principles and ideals of Chhatrapati
              Shivaji Maharaj, Chhatrapati Shahu Maharaj, Mahatma Jyotiba
              Phule, Dr. Babasaheb Ambedkar, and Sahityaratna Annabhau Sathe.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300">

            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Equality & Secularism
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              We believe in progressive values, respect for all religions,
              equality, and the overall development of marginalized,
              oppressed, Dalit, and Bahujan communities.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300">

            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Future Vision
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              To strengthen the Janhit Lokshahi Party through local
              self-government institutions, Assembly, and Lok Sabha
              elections and promote transparent, accountable,
              and people-oriented governance.
            </p>

          </div>

        </div>

        {/* ================= MOTTO ================= */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">

          <p className="text-orange-100 font-semibold tracking-wider uppercase text-sm mb-3">
            Our Motto
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            "For Public Welfare – For Public Happiness"
          </h2>

          <p className="mt-3 text-lg text-orange-50">
            "Committed to the Rights and Justice of the Bahujan Community"
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
```
