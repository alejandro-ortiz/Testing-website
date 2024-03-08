module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidFilter("relative_url", function(url) {
    // Prepend the site's base URL to the given URL
    return "http://localhost:8080" + url;
  });
  // Set custom site data
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "docs"
    }
  }
  //     includes: "_includes",
  //     data: "_data"
  //   },
  //   passthroughFileCopy: true,
  //   templateFormats: ["html", "md", "njk"],
  //   htmlTemplateEngine: "njk",
  //   markdownTemplateEngine: "njk",
  //   dataTemplateEngine: "njk",
  //   // Custom site data
  //   templateFormats: ["html", "md", "njk", "liquid"],
  //   htmlTemplateEngine: "liquid",
  //   markdownTemplateEngine: "liquid",
  //   passthroughFileCopy: true,
  //   // Add 'README.md' to Eleventy's ignore list
  //   ignoredFiles: ["README.md"]
  // };
};