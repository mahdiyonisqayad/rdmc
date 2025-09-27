import { Search, ChevronDown } from 'lucide-react';

const RecentSubmissionItem = ({ title, metadata }: { title: string, metadata: string }) => (
  <div className="flex items-start space-x-4 py-4">
    <div className="w-24 h-24 bg-light-gray flex items-center justify-center text-center text-sm text-gray-500">
      No Thumbnail Available
    </div>
    <div className="flex-1">
      <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">Item</span>
      <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer mt-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mt-1">{metadata}</p>
      <button className="flex items-center text-sm text-blue-600 hover:underline mt-2">
        <ChevronDown size={16} className="mr-1" />
        Show more
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-dark-blue  py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Welcome to the Jigjiga University Repository</h1>
          <p className="max-w-3xl  mb-6">
            At the heart of advancing research and management at Jigjiga University, the Repository is dedicated to improving outcomes through the efficient collection
          </p>
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul className="list-disc list-inside space-y-1 ">
              <li><strong>Comprehensive Data Repositories:</strong> The repository houses valuable health data, including public h</li>
              <li><strong>Research Publications:</strong> Access to research outputs and scholarly articles to advance kn</li>
              <li><strong>Visualization Tools:</strong> Interactive dashboards and visual tools to explore health trends a</li>
              <li><strong>Open Access:</strong> We believe in transparency and open access to data, empowering rese</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search the repository ..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className=" px-6 py-2 rounded-r-md flex items-center hover:bg-gray-700 hover:text-white">
              <Search size={20} className="mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Datasets Community Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-light mb-2">Datasets community at the Repository</h2>
          <p className="text-gray-600 mb-4">Select a dataset community to browse its collections.</p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl text-blue-600 hover:underline cursor-pointer">Health Facility Data</h3>
            </div>
            <div>
              <h3 className="text-xl text-blue-600 hover:underline cursor-pointer">Research Datasets</h3>
              <p className="text-gray-700">A central collection of health and health-related datasets from institutions across the region, curated by the Jigjiga University Repository.</p>
            </div>
          </div>
        </div>

        {/* Recent Submissions Section */}
        <div>
          <h2 className="text-3xl font-light mb-2">Recent Submissions</h2>
          <div className="divide-y divide-gray-200">
            <RecentSubmissionItem 
              title="Jigjiga University – Inpatient Mortality Data (2011 E.C.)"
              metadata="(JJU, 2025-08-18) Jigjiga University. This dataset presents inpatient mortality data..."
            />
            <RecentSubmissionItem 
              title="Jigjiga University – Inpatient Morbidity Data (2011 E.C.)"
              metadata="(JJU, 2025-08-18) Jigjiga University. This dataset presents inpatient morbidity data..."
            />
            <RecentSubmissionItem 
              title="Jigjiga University – DHIS2 Outpatient Department (OPD) Data (2006 E.C.)"
              metadata="(JJU, 2025-08-18) Jigjiga University. This dataset comprises outpatient department (OPD) service data..."
            />
          </div>
          <div className="mt-8 text-center">
            <button className="bg-dark-gray text-white px-6 py-2 rounded-md hover:bg-gray-700">
              Load more ...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
