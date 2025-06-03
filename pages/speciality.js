import React, { useState, useEffect } from "react";
import {
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  Zap,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const SpecialtyPage = () => {
  const [activeSpecialty, setActiveSpecialty] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const router = useRouter();

  const bookAppointment = () => {
    router.push("/appointment");
  };

  const specialties = [
    {
      id: 1,
      name: "Cardiology",
      icon: Heart,
      description: "Advanced heart care with cutting-edge technology",
      longDescription:
        "Our cardiology department offers comprehensive cardiac care including interventional procedures, heart surgery, and preventive cardiology. We use the latest technology including 3D cardiac imaging and minimally invasive techniques.",
      services: [
        "Heart Surgery",
        "Angioplasty",
        "Cardiac Imaging",
        "Preventive Care",
      ],
      doctors: 12,
      experience: "25+ Years",
      rating: 4.9,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      image: "🫀",
    },
    {
      id: 2,
      name: "Neurology",
      icon: Brain,
      description: "Expert neurological care for brain and nervous system",
      longDescription:
        "State-of-the-art neurological treatments including brain surgery, stroke care, and neurological rehabilitation. Our team specializes in complex neurological conditions with advanced diagnostic capabilities.",
      services: [
        "Brain Surgery",
        "Stroke Care",
        "Epilepsy Treatment",
        "Neurocritical Care",
      ],
      doctors: 8,
      experience: "20+ Years",
      rating: 4.8,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      image: "🧠",
    },
    {
      id: 3,
      name: "Ophthalmology",
      icon: Eye,
      description: "Complete eye care from routine exams to complex surgeries",
      longDescription:
        "Comprehensive eye care services including cataract surgery, retinal treatments, LASIK, and pediatric ophthalmology. We use the latest laser technology and microsurgical techniques.",
      services: [
        "Cataract Surgery",
        "LASIK",
        "Retinal Treatment",
        "Glaucoma Care",
      ],
      doctors: 6,
      experience: "15+ Years",
      rating: 4.9,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      image: "👁️",
    },
    {
      id: 4,
      name: "Orthopedics",
      icon: Bone,
      description: "Advanced bone, joint, and spine treatments",
      longDescription:
        "Comprehensive orthopedic care including joint replacement, sports medicine, spine surgery, and trauma care. Our minimally invasive techniques ensure faster recovery times.",
      services: [
        "Joint Replacement",
        "Sports Medicine",
        "Spine Surgery",
        "Trauma Care",
      ],
      doctors: 10,
      experience: "30+ Years",
      rating: 4.7,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      image: "🦴",
    },
    {
      id: 5,
      name: "Pediatrics",
      icon: Baby,
      description: "Specialized care for infants, children, and adolescents",
      longDescription:
        "Comprehensive pediatric care from newborn to adolescence. Our child-friendly environment and specialized pediatric specialists ensure the best care for your little ones.",
      services: [
        "Newborn Care",
        "Pediatric Surgery",
        "Child Development",
        "Immunizations",
      ],
      doctors: 15,
      experience: "18+ Years",
      rating: 4.9,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      image: "👶",
    },
    {
      id: 6,
      name: "Emergency Medicine",
      icon: Zap,
      description: "24/7 emergency care with rapid response team",
      longDescription:
        "Round-the-clock emergency medical services with advanced trauma care, critical care units, and rapid response teams. Equipped with state-of-the-art emergency equipment.",
      services: [
        "Trauma Care",
        "Critical Care",
        "Emergency Surgery",
        "Ambulance Services",
      ],
      doctors: 20,
      experience: "24/7 Available",
      rating: 4.8,
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      image: "🚨",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Patients Treated",
      color: "text-blue-600",
    },
    {
      icon: Award,
      value: "25+",
      label: "Years Experience",
      color: "text-green-600",
    },
    {
      icon: Stethoscope,
      value: "100+",
      label: "Expert Doctors",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "text-orange-600",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Medical
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Specialties
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                World-class healthcare with cutting-edge technology and
                compassionate care across all medical specialties
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={bookAppointment}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Book Appointment
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Emergency: 911
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-500 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-4 ${stat.color}`}
                  >
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Specialties
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of medical specialties, each
              staffed with world-renowned experts using the latest medical
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <div
                  key={specialty.id}
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer ${specialty.bgColor} border border-gray-100`}
                  onClick={() =>
                    setActiveSpecialty(
                      activeSpecialty === specialty.id ? null : specialty.id
                    )
                  }
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}
                  ></div>

                  <div className="relative p-8">
                    {/* Icon and emoji */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${specialty.color} shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl">{specialty.image}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {specialty.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {specialty.doctors} Doctors
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {specialty.experience}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                        {specialty.rating}
                      </div>
                    </div>

                    {/* Expand button */}
                    <div className="flex items-center justify-between">
                      <button
                        className={`px-6 py-3 bg-gradient-to-r ${specialty.color} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      >
                        Learn More
                      </button>
                      <ChevronRight
                        className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                          activeSpecialty === specialty.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`mt-6 overflow-hidden transition-all duration-500 ${
                        activeSpecialty === specialty.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {specialty.longDescription}
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Services Offered:
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {specialty.services.map((service, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${specialty.color} mr-2`}
                                ></div>
                                {service}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Book Now
                          </button>
                          <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            <MapPin className="w-4 h-4 inline mr-2" />
                            Find Doctor
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Schedule your appointment today and experience world-class
              healthcare with our expert medical team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={bookAppointment}
                className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Calendar className="inline-block w-5 h-5 mr-2" />
                Schedule Appointment
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                <Phone className="inline-block w-5 h-5 mr-2" />
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">MedCenter Hospital</h3>
            <p className="text-gray-400 mb-6">
              Excellence in Healthcare Since 1995
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <span>📍 123 Medical Drive, Healthcare City</span>
              <span>📞 (555) 123-4567</span>
              <span>✉️ info@medcenter.com</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SpecialtyPage;
