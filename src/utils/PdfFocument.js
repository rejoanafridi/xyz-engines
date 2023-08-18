/* eslint-disable react/prop-types */

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCellHeader: {
    backgroundColor: '#f0f0f0',
    padding: 5,
  },
  tableCell: {
    padding: 5,
  },
});

const PdfDocument = ({ result }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Result Table</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCellHeader, styles.tableCell]}>PK</Text>
            <Text style={[styles.tableCellHeader, styles.tableCell]}>X</Text>
            <Text style={[styles.tableCellHeader, styles.tableCell]}>Y</Text>
            <Text style={[styles.tableCellHeader, styles.tableCell]}>Z</Text>
          </View>
          {result.map((row, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCell, styles.tableCell]}>{index}</Text>
              <Text style={[styles.tableCell, styles.tableCell]}>{row.X}</Text>
              <Text style={[styles.tableCell, styles.tableCell]}>{row.Y}</Text>
              <Text style={[styles.tableCell, styles.tableCell]}>{row.Z}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
