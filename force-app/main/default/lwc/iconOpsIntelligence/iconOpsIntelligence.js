import { LightningElement, track } from 'lwc';
import getPipelineHealth from '@salesforce/apex/IconOpsController.getPipelineHealth';

export default class IconOpsIntelligence extends LightningElement {
    @track loading = true;
    @track healthScore = 0;
    @track healthGrade = '';
    @track winRate = 0;
    @track winRateTrend = '';
    @track dataQualityGrade = '';
    @track dataQualityNote = '';
    @track showCta = false;
    @track ctaMessage = '';
    @track ctaLabel = '';
    @track ctaUrl = '';

    connectedCallback() {
        this.loadData();
    }

    async loadData() {
        try {
            const result = await getPipelineHealth();
            this.healthScore = result.healthScore;
            this.healthGrade = result.healthGrade;
            this.winRate = result.winRate;
            this.winRateTrend = result.winRateTrend;
            this.dataQualityGrade = result.dataQualityGrade;
            this.dataQualityNote = result.dataQualityNote;

            // Show CTA after 3+ views
            const viewCount = parseInt(localStorage.getItem('icon_sf_views') || '0') + 1;
            localStorage.setItem('icon_sf_views', viewCount.toString());
            if (viewCount >= 3) {
                this.showCta = true;
                this.ctaMessage = 'See how your Salesforce data connects to your entire business operation.';
                this.ctaLabel = 'Explore ICON BusinessOS';
                this.ctaUrl = 'https://theicon.ai/platform?ref=salesforce-marketplace&views=' + viewCount;
            }
        } catch (error) {
            console.error('ICON Ops Intelligence error:', error);
        } finally {
            this.loading = false;
        }
    }

    handleCtaClick() {
        window.open(this.ctaUrl, '_blank');
    }
}
