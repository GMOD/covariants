import React from 'react'
import {
  createViewState,
  createJBrowseTheme,
  JBrowseLinearGenomeView,
  ThemeProvider,
} from '@jbrowse/react-linear-genome-view'

import type { ClusterDatum } from 'src/io/getClusters'

export interface GenomeBrowserProps {
  cluster: ClusterDatum
}

const theme = createJBrowseTheme()

const assembly = {
  name: 'NC_045512.2',
  sequence: {
    type: 'ReferenceSequenceTrack',
    trackId: 'Sars-Cov2-ReferenceSequenceTrack',
    adapter: {
      type: 'BgzipFastaAdapter',
      fastaLocation: {
        uri: 'https://jbrowse.org/genomes/sars-cov2/fasta/sars-cov2.fa.gz',
      },
      faiLocation: {
        uri: 'https://jbrowse.org/genomes/sars-cov2/fasta/sars-cov2.fa.gz.fai',
      },
      gziLocation: {
        uri: 'https://jbrowse.org/genomes/sars-cov2/fasta/sars-cov2.fa.gz.gzi',
      },
    },
  },
}

export function GenomeBrowser() {
  const state = createViewState({
    assembly,
    tracks: [],
    location: 'NC_045512.2:1..29,903',
  })
  return (
    <ThemeProvider theme={theme}>
      <JBrowseLinearGenomeView viewState={state} />
    </ThemeProvider>
  )
}
