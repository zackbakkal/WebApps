<?xml version="1.0"?>

<!-- My ResumeXSLT : resume.xsl -->
<!-- Transfomeation of resume information to HTML5 -->
<xsl:stylesheet version="1.0"
	xmlns:xsl="https://www.w3.org/1999/XSL/transform">
	
	<!-- Write XML declaration and DOCTYPE DTD information -->
	<xsl:output method="html" doctype-system="about:legacy-compat" />
	
	<!-- Match document root -->
	<xsl:template match="/">
		<html>
			<xsl:apply-templates/>
		</html>
	</xsl:template>
	
	<!-- Match resume -->
	<xsl:template match "resume">
		<head>
			<meta charset="utf-8" />
			<link rel="stylesheet" type="text/css" href="../stylesheets/resumestylesheet.css" />
			<title>Resume - <xsl:value-of select="contactInfo/name/firstName" /> 
				<xsl:value-of select="contactInfo/name/lastName" /></title>
		</head>
		
		<body>
			<header>
				<h3>
					<xsl:value-of select="contactInfo/name/firstName" /> 
					<xsl:value-of select="contactInfo/name/lastName" />
				</h3>
				
				<p>
					<xsl:value-of select="contactInfo/address/street" />, 
					<xsl:value-of select="contactInfo/address/city" />, 
					<xsl:value-of select="contactInfo/address/province" />, 
					<xsl:value-of select="contactInfo/address/zip" />, 
					<xsl:value-of select="contactInfo/address/contry" /> | 
					<xsl:value-of select="contactInfo/address/phone" /> | 
					<xsl:value-of select="contactInfo/address/email" />
				</p>
			</header>
			
		</body>
		
	</xsl:template>
</xsl:stylesheet>