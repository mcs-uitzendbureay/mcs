import Link from 'next/link';

export default function ServiceCard({ title, description, icon, href, features, index = 0 }) {
  return (
    <div className="group card-interactive p-8">
      {/* Icon */}
      <div className="w-14 h-14 bg-dark-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-display font-bold text-dark-950 mb-3 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-dark-500 leading-relaxed mb-5">
        {description}
      </p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-dark-600">
              <span className="w-5 h-5 bg-success-100 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Link */}
      {href && (
        <Link
          href={href}
          className="inline-flex items-center text-dark-950 font-semibold group-hover:text-primary-600 transition-colors"
        >
          Meer informatie
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      )}
    </div>
  );
}
