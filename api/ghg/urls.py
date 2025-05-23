from datetime import datetime, timedelta

from django.conf import settings
from django.conf.urls import include, url
# from django.contrib.gis import admin

from rest_framework import routers
from rest_framework_extensions.routers import NestedRouterMixin

from django.views.generic import TemplateView, RedirectView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from users.views import (
    MyTokenObtainPairView
)
from users.views import (
    CustomUserViewSet
)
from applications.views import (
    ApplicationViewSet,
    ApplicationAssessmentViewSet,
    ApplicationEvaluationViewSet,
    ApplicationEvaluationScheduleViewSet
)
from aspects.views import (
    AspectViewSet
)
from houses.views import (
    HouseViewSet
)
from medias.views import (
    MediaViewSet
)
from notifications.views import (
    NotificationViewSet
)
from rebates.views import (
    RebateViewSet
)
from tickets.views import (
    TicketViewSet,
    TicketMessageViewSet
)

class NestedDefaultRouter(NestedRouterMixin, routers.DefaultRouter):
    pass


router = NestedDefaultRouter()

users_router = router.register(
    'users', CustomUserViewSet
)

applications_router = router.register(
    'applications', ApplicationViewSet
)

application_assesments_router = router.register(
    'application-assesments', ApplicationAssessmentViewSet
)

application_evaluations_router = router.register(
    'application-evaluations', ApplicationEvaluationViewSet
)
application_evaluation_schedules_router = router.register(
    'application-evaluation-schedules', ApplicationEvaluationScheduleViewSet
)

aspects_router = router.register(
    'aspects', AspectViewSet
)

houses_router = router.register(
    'houses', HouseViewSet
)

medias_router = router.register(
    'medias', MediaViewSet
)

notifications_router = router.register(
    'notifications', NotificationViewSet
)

rebates_router = router.register(
    'rebates', RebateViewSet
)

tickets_router = router.register(
    'tickets', TicketViewSet
)

schema_view = get_schema_view(
   openapi.Info(
      title="GHG eRebate API",
      default_version='v1',
      description="Green House Gas eRebate System",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

tickets_router.register('messages', TicketMessageViewSet, basename='ticket-messages', parents_query_lookups=['ticket'])

urlpatterns = [
    url(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'
    ),
    url(r'v1/', include(router.urls)),
    url(r'auth/', include('rest_auth.urls')),
    url(r'auth/registration/', include('rest_auth.registration.urls')),

    url('auth/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    url('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    url('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]