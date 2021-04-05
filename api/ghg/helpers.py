import uuid
import os
import datetime

from django.utils.deconstruct import deconstructible
from django.core.mail import (
    send_mail,
    EmailMultiAlternatives
)
# from anymail import attach_inline_image_file

@deconstructible
class PathAndRename(object):

    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # set filename as random string
        filename_ = datetime.datetime.utcnow().strftime("%s") + uuid.uuid4().hex
        filename = '{}.{}'.format(filename_, ext)
        # return the whole path to the file
        return os.path.join(self.path, filename)

def send_email(subject_, message_, from_, to_):

    send_mail(
        subject_,
        message_,
        from_,
        to_
    )

# def send_email_with_html(subject_, message_, from_, to_):

#     msg = EmailMultiAlternatives(
#         subject=subject_,
#         body=message_,
#         from_email=from_,
#         to=to_,
#         reply_to=['Helpdesk <ghg@mbpj.gov.my>']
#     )

#     # Include an inline image in the html:
#     logo_cid = attach_inline_image_file(msg, "/path/to/logo.jpg")
#     html = """<img alt="Logo" src="cid:{logo_cid}">
#             <p>Please <a href="https://example.com/activate">activate</a>
#             your account</p>""".format(logo_cid=logo_cid)
#     msg.attach_alternative(html, "text/html")