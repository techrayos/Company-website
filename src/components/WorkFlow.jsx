import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard'; 

export default function WorkFlow() {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProcesses() {
      const { data, error } = await supabase
        .from('work_processes')
        .select('*')
        .order('order_index', { ascending: true });

      if (!error && data) setProcesses(data);
      setLoading(false);
    }
    fetchProcesses();
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-16 sm:py-24 overflow-hidden"
    >
      <motion.div  className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery every time
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {processes.map((process, index) => (
            <WorkCard key={process.id} process={process} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
