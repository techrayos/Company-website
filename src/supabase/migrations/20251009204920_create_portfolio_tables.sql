/*
  # Techrayos Portfolio Database Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `title` (text) - Service name
      - `description` (text) - Service description
      - `icon` (text) - Icon identifier
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
      
    - `industries`
      - `id` (uuid, primary key)
      - `name` (text) - Industry name
      - `description` (text) - Industry description
      - `image_url` (text) - Industry image
      - `features` (jsonb) - Array of features
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
      
    - `technologies`
      - `id` (uuid, primary key)
      - `name` (text) - Technology name
      - `category` (text) - Frontend/Backend/Database/etc
      - `icon` (text) - Icon identifier or URL
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
      
    - `work_processes`
      - `id` (uuid, primary key)
      - `title` (text) - Process step title
      - `description` (text) - Process description
      - `image_url` (text) - Process image
      - `order_index` (integer) - Display order
      - `created_at` (timestamp)
      
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Submitter name
      - `email` (text) - Submitter email
      - `phone` (text) - Phone number
      - `message` (text) - Message content
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on all tables
    - Public read access for portfolio content tables
    - Authenticated-only write access for contact submissions
*/

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

-- Industries Table
CREATE TABLE IF NOT EXISTS industries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE industries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view industries"
  ON industries FOR SELECT
  TO anon, authenticated
  USING (true);

-- Technologies Table
CREATE TABLE IF NOT EXISTS technologies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  icon text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view technologies"
  ON technologies FOR SELECT
  TO anon, authenticated
  USING (true);

-- Work Processes Table
CREATE TABLE IF NOT EXISTS work_processes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE work_processes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view work processes"
  ON work_processes FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample data for services
INSERT INTO services (title, description, icon, order_index) VALUES
('Web Development', 'Custom web applications built with modern technologies', 'Globe', 1),
('Mobile Apps', 'Native and cross-platform mobile solutions', 'Smartphone', 2),
('Cloud Solutions', 'Scalable cloud infrastructure and deployment', 'Cloud', 3),
('UI/UX Design', 'Beautiful and intuitive user experiences', 'Palette', 4);

-- Insert sample data for work processes
INSERT INTO work_processes (title, description, image_url, order_index) VALUES
('Discussion & Analysis', 'We start by understanding your requirements and business goals through comprehensive analysis', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', 1),
('UI/UX Design', 'Our designers create intuitive and engaging user experiences that align with your brand', 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800', 2),
('Development', 'Expert developers bring designs to life with clean, scalable, and maintainable code', 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800', 3),
('Quality Assurance', 'Rigorous testing ensures your product meets the highest standards of quality', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800', 4),
('Delivery & Maintenance', 'We deploy your solution and provide ongoing support to ensure continued success', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', 5);

-- Insert sample data for technologies
INSERT INTO technologies (name, category, icon, order_index) VALUES
('React', 'Frontend', 'react', 1),
('Next.js', 'Frontend', 'nextjs', 2),
('Node.js', 'Backend', 'nodejs', 3),
('Python', 'Backend', 'python', 4),
('MongoDB', 'Database', 'mongodb', 5),
('PostgreSQL', 'Database', 'postgresql', 6),
('AWS', 'Cloud', 'aws', 7),
('Docker', 'DevOps', 'docker', 8);

-- Insert sample data for industries
INSERT INTO industries (name, description, image_url, features, order_index) VALUES
('Healthcare', 'Digital solutions for modern healthcare', 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800', '["Telemedicine", "Patient Management", "Health Records"]', 1),
('E-Commerce', 'Scalable online retail platforms', 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800', '["Shopping Cart", "Payment Integration", "Inventory Management"]', 2),
('Finance', 'Secure financial technology solutions', 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800', '["Banking Apps", "Payment Processing", "Analytics"]', 3),
('Education', 'Interactive learning platforms', 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800', '["LMS", "Video Conferencing", "Assessment Tools"]', 4),
('Real Estate', 'Property management and listing systems', 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800', '["Property Listings", "Virtual Tours", "CRM"]', 5),
('Manufacturing', 'Industry 4.0 and automation solutions', 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800', '["IoT Integration", "Supply Chain", "Quality Control"]', 6),
('Entertainment', 'Media and content delivery platforms', 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800', '["Streaming", "Content Management", "User Engagement"]', 7),
('Hospitality', 'Guest management and booking systems', 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800', '["Reservations", "Guest Services", "Reviews"]', 8),
('Transportation', 'Logistics and fleet management', 'https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=800', '["Route Optimization", "Tracking", "Fleet Management"]', 9),
('Agriculture', 'Smart farming and agritech solutions', 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=800', '["Crop Monitoring", "Weather Data", "Marketplace"]', 10);