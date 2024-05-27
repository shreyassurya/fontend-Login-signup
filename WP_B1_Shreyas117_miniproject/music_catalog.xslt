<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <title>Music Catalog</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: black;
          color: white;
        }
        

        h1 a{
            margin-left:10px;
            color: #fff;
        }

        h1 a:hover{
            color: #5773ff;
        }

        
        table {
          width: 100%;
          border-collapse: collapse;
          background-color: #18181d;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff; /* Add vertical partition line */
        }
        th {
          background-color: #5773ff;
        }
        td:last-child {
          border-right: none; /* Remove vertical partition line for last column */
        }
      </style>
    </head>
    <body>
      <h2>Music Catalog</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        <xsl:for-each select="catalog/album">
          <tr>
            <td><xsl:value-of select="title"/></td>
            <td><xsl:value-of select="artist"/></td>
            <td><xsl:value-of select="genre"/></td>
            <td><xsl:value-of select="year"/></td>
          </tr>
        </xsl:for-each>
      </table>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>
