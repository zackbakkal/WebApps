<?xml version = "1.0" encoding = "UTF-8"?> 
<xsl:stylesheet version = "1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">  
	
	<!-- Match document root -->
	<xsl:template match="/">
		<html>
				<head>
					<meta charset="utf-8" />
					<title>Part 1, Assignment 1</title>
					<link rel="stylesheet" type="text/css" href="../shared/stylesheets/myStyle.css" />
				</head>
				<body>
					<header>
						<h1>Resume</h1>
						<div id ="info" class="padding">
							<h2>
								<p><xsl:value-of select="resume/contactInfo/applicantName/firstName" /> <xsl:value-of select="concat(' ', resume/contactInfo/applicantName/lastName)" /></p>
							</h2>
							
							<p>
								<xsl:value-of select="resume/contactInfo/contactMethod/address/street" />
								<xsl:value-of select="concat(', ', resume/contactInfo/contactMethod/address/city)" />
								<xsl:value-of select="concat(', ', resume/contactInfo/contactMethod/address/province)" />
								<xsl:value-of select="concat(', ', resume/contactInfo/contactMethod/address/zip)" />
								<xsl:value-of select="concat(', ', resume/contactInfo/contactMethod/address/contry)" />
								<xsl:value-of select="concat(' | ', resume/contactInfo/contactMethod/phone)" />
								<xsl:value-of select="concat(' | ', resume/contactInfo/contactMethod/email)" />
							</p>
						</div>
					</header>
					
					<div id="main" class="padding">
						<section>
							<header>
								<h3>EDUCATION</h3>
							</header>
							
							<section class="multicolumns clearfix entry">
								<div class="left entrydates">
									<p><xsl:value-of select="resume/education/school/date/from" />
									<xsl:value-of select="concat(' - ', resume/education/school/date/to)" /></p>
								</div>
								<div class="right entryinfo">
									<p><xsl:value-of select="resume/education/school/degree/degreeName" /></p>
									<p>
										<xsl:value-of select="resume/education/school/schoolInfo/schoolName" />
										<xsl:value-of select="concat(', ', resume/education/school/schoolInfo/contactMethod/address/city)" />
										<xsl:value-of select="concat(', ', resume/education/school/schoolInfo/contactMethod/address/province)" />
										<xsl:value-of select="concat(', ', resume/education/school/schoolInfo/contactMethod/address/contry)" />
									</p>
									<p>GPA
										<xsl:value-of select="concat(' ',resume/education/school/educationalMeasure/measureValue)" />
										<xsl:value-of select="concat('/',resume/education/school/educationalMeasure/maximumValue)" />
									</p>
								</div>
							</section>
							
							<section class="multicolumns clearfix entry">
								<div class="left entrydates">
									<p><xsl:value-of select="resume/education/highSchool/date/graduationDate" /></p>
								</div>
								
								<div class="right entryinfo">
									<p><xsl:value-of select="resume/education/highSchool/degree/degreeName" /></p>
									<p>
										<xsl:value-of select="resume/education/highSchool/schoolInfo/schoolName" />
										<xsl:value-of select="concat(', ', resume/education/highSchool/schoolInfo/contactMethod/address/city)" />
										<xsl:value-of select="concat(', ', resume/education/highSchool/schoolInfo/contactMethod/address/province)" />
										<xsl:value-of select="concat(', ', resume/education/highSchool/schoolInfo/contactMethod/address/contry)" />
									</p>
									<p>GPA
										<xsl:value-of select="concat(' ',resume/education/highSchool/educationalMeasure/measureValue)" />
										<xsl:value-of select="concat('/',resume/education/highSchool/educationalMeasure/maximumValue)" />
									</p>
								</div>
							</section>
								
						</section>
						
						<section>
							<header>
								<h3>WORK EXPERIENCE</h3>
							</header>
							<section class="multicolumns clearfix entry">
								<div class="left entrydates">
									<p><xsl:value-of select="resume/workExperience/job/workDate/from" />
									<xsl:value-of select="concat(' - ', resume/workExperience/job/workDate/to)" /></p>
								</div>
								
								<div class="right entryinfo">
									<p><xsl:value-of select="resume/workExperience/job/position" /></p>
									<p>
										<xsl:value-of select="resume/workExperience/job/companyInfo/companyName" />
										<xsl:value-of select="concat(', ',resume/workExperience/job/companyInfo/contactMethod/address/city)" />
										<xsl:value-of select="concat(', ',resume/workExperience/job/companyInfo/contactMethod/address/province)" />
										<xsl:value-of select="concat(', ',resume/workExperience/job/companyInfo/contactMethod/address/contry)" />
									</p>
								</div>
							</section>
						</section>
						
						<section>
							<header>
								<h3>SKILLS</h3>
							</header>
							<section>
								<div>
									<ul>
										<xsl:for-each select="resume/skills/language">
											<li><xsl:value-of select="concat(skillname, ': ', experience)" /></li>
										</xsl:for-each>
									</ul>
								</div>
							</section>
						</section>
					</div>
					
				</body>
		</html>
		
	</xsl:template>
</xsl:stylesheet>