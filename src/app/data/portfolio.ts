import websiteDesignImage from "figma:asset/025e8677a3eb9099c3597537af3442aee2f50513.png";
import mobileAppImage from "figma:asset/0c3ebc38221acd567787b68cc504c7f63f95def9.png";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  type: 'image' | 'video';
  videoUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: 'websites',
    title: 'Website Design',
    description: 'Premium web experiences that captivate and convert',
    coverImage: websiteDesignImage,
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description: 'Intuitive app interfaces designed for engagement',
    coverImage: mobileAppImage,
    gradient: 'from-green-400 to-lime-400'
  },
  {
    id: 'social',
    title: 'Other Work',
    description: 'Scroll-stopping content that drives engagement',
    coverImage: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NzQzNTYxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gradient: 'from-purple-400 to-pink-400'
  }
];

export const portfolioItems: PortfolioItem[] = [
  // Website Design
 { id: 'w1', title: 'Telemedicine Website', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684688/carematchmd_codhoc.png' },
  { id: 'w2', title: 'Health Fitness Drugs', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684688/Health_Fitness_Drugs_d7t4au.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776346138/Nims_Website_video_zzeoz2.mp4' },
  { id: 'w3', title: 'Home Services Solution ', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684690/AWD_lx7o2i.jpg' },
  { id: 'w4', title: 'Vision to Sculpture', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776424081/video_thumbnail_leceo7.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776423904/Vision_to_Sculpture_uwinid.mp4' },
  { id: 'w5', title: 'Building Automation Systems', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684688/Building_Automation_Systems_qndgtz.jpg' },
  { id: 'w6', title: 'Ai Crypto Market', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684691/Ai_Crypto_Market_xqexfo.jpg' },
 { id: 'w35', title: 'Aviary Manager App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776771168/bird_final_z0ahlu.jpg' },
  { id: 'w7', title: 'Telemedicine Landing Page', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684691/caremd_ra1bad.png' },
  { id: 'w8', title: 'AI Summer of Adventure', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684689/Ai_Summer_of_Adventure_nokiqz.jpg' },
  { id: 'w9', title: 'Real Estate', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776424552/trump_tower_ysuxxc.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776424370/trump_tower_video_header_mhunn6.mp4' },
  { id: 'w10', title: 'Banking Dashboard', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776425273/Banking_Dashboard_di40ns.jpg' },
  { id: 'w11', title: 'Love Education', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684690/Love_Education_aj1uap.jpg' },
   { id: 'w34', title: 'Wellness & Spa Website', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776771169/rose_ai_final_jp1q47.jpg' },
{ id: 'w12', title: 'IT Services and IT Consulting', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684689/IT_Services_and_IT_Consulting_cgmvj9.jpg' },
  { id: 'w13', title: 'Pizza and Beverage ', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684691/Pizza_and_Beverage_dghit1.jpg' },
  { id: 'w14', title: 'Building Automation Systems', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776425589/akcel01_sdel0t.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776425437/Building_Automation_Systems_elpyuv.mp4' },
  { id: 'w15', title: 'Real Estate', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776424552/trump_tower_ysuxxc.jpg' },
    { id: 'w36', title: 'Barber Solution App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776771169/fine_me_final_lhnp6i.jpg' },
  { id: 'w16', title: 'Shuttle Service ', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684689/Cruise_Shuttle_Booking_tgydrd.jpg' },
  { id: 'w17', title: 'NFT Market', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684689/NFT_Markeat_seyz9d.jpg' },
  { id: 'w18', title: 'Floor & Decor', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684689/floor_decor_zmftxk.jpg' },
  { id: 'w19', title: 'Clothing Brand', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776431764/the_shop_banner_donory.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776431662/The_Shop_dvxeb1.mp4' },
  { id: 'w33', title: 'SaaS Analytics Platform', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776771168/fine_application_final_f3hhgj.jpg' },
  { id: 'w20', title: 'Hiring Staff', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684690/staff_patrol_lnjjwv.png' },
  { id: 'w21', title: 'Medical Promotional Page', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684690/curehotline_y308tc.jpg' },
  { id: 'w22', title: 'Learning Platform', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684690/elearning_vkiswd.jpg' },
  { id: 'w23', title: 'Cyber Security', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776430272/thumb_l6vehx.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776430409/cybersolidity--V2_1_wuaceh.mp4' },
  { id: 'w24', title: 'Game Site', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684691/game_fswf5s.jpg' },
  { id: 'w25', title: 'Plant Marketplace', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776431267/plants_banner_hfe7ch.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776431109/Plant_Marketplace_w40gwm.mov' },
  { id: 'w26', title: 'Career Page', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776430922/Career_page_layout_nr9t7i.jpg' },
  { id: 'w27', title: 'Single Product Website', category: 'websites', type: 'video', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776432569/pretty_good_tjs5gp.jpg', videoUrl: 'https://res.cloudinary.com/df6rigg3x/video/upload/v1776432613/pretty_good_dmkn08.mp4' },
  { id: 'w28', title: 'Software House Home Page', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776684691/Software_house_home_page_1_ppzcwv.jpg' },
  { id: 'w29', title: 'NFT Maker Mobile App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776784240/NFT-Maker-Mobile-App_1_obblk2.jpg' },
  { id: 'w30', title: 'Digital Marketing Agency', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776771168/esim_final_d1fcue.jpg' },
  { id: 'w31', title: 'Barber Solution App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776436903/barber_mobile_application_kpyntn.png' },
  { id: 'w32', title: 'Consulting Doctor App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776435810/CareMD_Mobile_Application_gauodf.png' },
  { id: 'w37', title: 'Portfolio', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776950139/portfolio_lfujey.jpg' },
  { id: 'w38', title: 'Game Badges', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776783766/Game_Badges_ue0bpl.png' },
  { id: 'w39', title: 'Design Tattoo App', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776783214/make_tattoo_mobiel_application_spjm9w.png' },
  { id: 'w40', title: 'NFT Maker Mobile App ', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776784240/NFT_Maker_Mobile_App_1_sbmcug.png' },
  { id: 'w41', title: 'Amazon Listing Images', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776779923/Amazon_Social_Posts_listings_wt6i7s.jpg' },
  { id: 'w42', title: 'Spermies NFT', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776774910/privew_seyof7.jpg' },
  { id: 'w43', title: 'Logos', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776783766/Logos_Showcase_tstuik.jpg' },
  { id: 'w44', title: 'Non AI', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776783766/Non-Ai_xovetr.jpg' },
  { id: 'w45', title: 'Law Firm for Drivers', category: 'websites', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776935401/Law_Firm_for_Drivers_hxibi1.jpg' },


  // Mobile Applications
  { id: 'm1', title: 'Health Care Mobile Application', category: 'mobile', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776435810/CareMD_Mobile_Application_gauodf.png' },
  { id: 'm2', title: 'Food Delivery App Demo', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: 'm3', title: 'Banking App', category: 'mobile', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776436903/barber_mobile_application_kpyntn.png' },
  { id: 'm4', title: 'Social Network Animation', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  { id: 'm5', title: 'Music Player', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800' },
  { id: 'm6', title: 'E-Learning Platform', category: 'mobile', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776437035/clutter_final_tbfpj9.png' },
  { id: 'm7', title: 'Meditation App', category: 'mobile', type: 'image', image: 'https://res.cloudinary.com/df6rigg3x/image/upload/v1776437036/esim_final_ic16m0.png' },
  { id: 'm8', title: 'Weather App', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800' },
  { id: 'm9', title: 'Travel Guide', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
  { id: 'm10', title: 'Recipe App', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800' },
  { id: 'm11', title: 'Task Manager', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800' },
  { id: 'm12', title: 'Ride Share App', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800' },
  { id: 'm13', title: 'Shopping App', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
  { id: 'm14', title: 'Dating App', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800' },
  { id: 'm15', title: 'Language Learning', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800' },
  { id: 'm16', title: 'Podcast Player', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800' },
  { id: 'm17', title: 'News Reader', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800' },
  { id: 'm18', title: 'Calorie Counter', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' },
  { id: 'm19', title: 'Photo Editor', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800' },
  { id: 'm20', title: 'Crypto Wallet', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800' },
  { id: 'm21', title: 'Video Chat', category: 'mobile', type: 'video', image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4' },
  { id: 'm22', title: 'Gaming App', category: 'mobile', type: 'image', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800' },
  
  // Social Media
  { id: 's1', title: 'Instagram Campaign', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1764664281874-95ebc77286a0?w=800' },
  { id: 's2', title: 'Product Launch Video', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4' },
  { id: 's3', title: 'Brand Story Series', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800' },
  { id: 's4', title: 'Event Promotion Reel', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4' },
  { id: 's5', title: 'Seasonal Campaign', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800' },
  { id: 's6', title: 'Influencer Content', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800' },
  { id: 's7', title: 'Social Media Graphics', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800' },
  { id: 's8', title: 'TikTok Content', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800', videoUrl: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4' },
  { id: 's9', title: 'Facebook Ads', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800' },
  { id: 's10', title: 'Twitter Campaign', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800' },
  { id: 's11', title: 'YouTube Thumbnails', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800' },
  { id: 's12', title: 'LinkedIn Posts', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800' },
  { id: 's13', title: 'Pinterest Graphics', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800' },
  { id: 's14', title: 'Stories Template', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800', videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4' },
  { id: 's15', title: 'Carousel Posts', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800' },
  { id: 's16', title: 'Reels Content', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800', videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4' },
  { id: 's17', title: 'Quote Graphics', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800' },
  { id: 's18', title: 'Product Showcase', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800' },
  { id: 's19', title: 'Behind The Scenes', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1598662957477-64b3f0850c92?w=800', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 's20', title: 'User Generated Content', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800' },
  { id: 's21', title: 'Testimonial Videos', category: 'social', type: 'video', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 's22', title: 'Holiday Campaign', category: 'social', type: 'image', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800' }
];