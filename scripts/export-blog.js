const fs = require('fs');
const path = require('path');

// Import the blogs data
const { blogs } = require('../src/data/blogs.ts');

// Create the output directory if it doesn't exist
const outputDir = path.join(__dirname, '../exported-blogs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Export all blogs as one JSON file
const allBlogsPath = path.join(outputDir, 'all-blogs.json');
fs.writeFileSync(allBlogsPath, JSON.stringify(blogs, null, 2));
console.log(`✅ All blogs exported to: ${allBlogsPath}`);

// Export each blog as a separate JSON file
blogs.forEach(blog => {
  const blogPath = path.join(outputDir, `${blog.id}.json`);
  fs.writeFileSync(blogPath, JSON.stringify(blog, null, 2));
  console.log(`✅ Exported: ${blog.title}`);
});

console.log(`\n🎉 Successfully exported ${blogs.length} blog(s)!`);
console.log(`📁 Files saved to: ${outputDir}`);
