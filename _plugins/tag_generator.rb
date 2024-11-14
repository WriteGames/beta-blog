Jekyll::Hooks.register :posts, :post_write do |post|
	# ensure the directory is the root
	Dir.chdir(File.dirname(__FILE__) + "/..")
	
	Dir.mkdir("_tag") unless Dir.exist?("_tag")
	
	all_existing_tags = Dir.entries("_tag")
	.map { |t| t.match(/(.*).md/) }
	.compact.map { |m| m[1] }
	
	tags = post['tags'].reject { |t| t.empty? }
	.map { |t| (
		t.downcase
			.gsub(' ', '-')
			.gsub('c++', 'cpp')
			.gsub('c#', 'c-sharp')
	) }
	
	tags.each do |tag|
		generate_tag_file(tag) if !all_existing_tags.include?(tag)
	end
end

def generate_tag_file(tag)
	# generate tag file
	File.open("_tag/#{tag}.md", "wb") do |file|
		file << "---\nlayout: tags\ntag-name: #{tag}\n---\n"
	end
end
